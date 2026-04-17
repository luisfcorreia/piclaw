import { getKeychainEntry, listKeychainEntries } from "../secure/keychain.js";
import { buildInjectedExecCommand, redactKeychainSecretsInText } from "../secure/shell-secrets.js";
import { createLogger, debugSuppressedError } from "../utils/logger.js";
const log = createLogger("portainer.client");
const defaultRequestExecutor = async ({ url, method, headers, body, allowInsecureTls }) => {
    const response = await fetch(url, {
        method,
        headers,
        ...(body !== undefined ? { body } : {}),
        tls: {
            rejectUnauthorized: !allowInsecureTls,
        },
    });
    return {
        status: response.status,
        statusText: response.statusText,
        bodyText: await response.text(),
    };
};
let requestExecutor = defaultRequestExecutor;
const DEFAULT_PORTAINER_KEYCHAIN = process.env.PICLAW_PORTAINER_KEYCHAIN || "portainer/relay";
export function setPortainerRequestExecutorForTests(executor) {
    requestExecutor = executor ?? defaultRequestExecutor;
}
function normalizeBaseUrl(value) {
    const trimmed = value.trim().replace(/\/+$/, "");
    if (!trimmed) {
        throw new Error("Portainer base_url is required.");
    }
    return trimmed;
}
function normalizeApiPath(value) {
    const trimmed = value.trim();
    if (!trimmed) {
        throw new Error("Portainer request path is required.");
    }
    if (/^https?:\/\//i.test(trimmed)) {
        throw new Error("Use a relative Portainer API path, not an absolute URL.");
    }
    return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}
function isScalar(value) {
    return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}
function appendParam(search, key, value) {
    if (value == null)
        return;
    if (Array.isArray(value)) {
        for (const item of value)
            appendParam(search, key, item);
        return;
    }
    if (isScalar(value)) {
        search.append(key, String(value));
        return;
    }
    search.append(key, JSON.stringify(value));
}
function toSearchParams(value) {
    const search = new URLSearchParams();
    if (!value || typeof value !== "object" || Array.isArray(value)) {
        return search;
    }
    for (const [key, entry] of Object.entries(value)) {
        appendParam(search, key, entry);
    }
    return search;
}
function parseResponseBody(text) {
    const trimmed = text.trim();
    if (!trimmed)
        return null;
    try {
        return JSON.parse(trimmed);
    }
    catch (error) {
        debugSuppressedError(log, "Failed to parse Portainer response body as JSON; returning raw text.", error, {
            operation: "portainer.parse_response_body.parse_json",
        });
        return text;
    }
}
function decodeDockerMultiplexedText(text) {
    if (!text)
        return "";
    const buffer = Buffer.from(text, "utf8");
    if (buffer.length < 8)
        return text;
    let offset = 0;
    const chunks = [];
    let parsedAnyFrame = false;
    while (offset + 8 <= buffer.length) {
        const streamType = buffer[offset];
        const frameLength = buffer.readUInt32BE(offset + 4);
        const frameStart = offset + 8;
        const frameEnd = frameStart + frameLength;
        if (![0, 1, 2, 3].includes(streamType) || frameEnd > buffer.length) {
            return text;
        }
        chunks.push(buffer.subarray(frameStart, frameEnd));
        parsedAnyFrame = true;
        offset = frameEnd;
    }
    if (!parsedAnyFrame || offset !== buffer.length)
        return text;
    return Buffer.concat(chunks).toString("utf8");
}
function requirePositiveInt(value, field, workflow) {
    if (!Number.isFinite(value) || value <= 0) {
        throw new Error(`Workflow ${workflow} requires ${field}.`);
    }
    return Math.trunc(value);
}
function requireText(value, field, workflow) {
    const trimmed = typeof value === "string" ? value.trim() : "";
    if (!trimmed) {
        throw new Error(`Workflow ${workflow} requires ${field}.`);
    }
    return trimmed;
}
function normalizeContainerName(name) {
    return name.replace(/^\/+/, "").trim();
}
function normalizeLookupName(name) {
    return normalizeContainerName(name).toLowerCase();
}
function formatPorts(ports) {
    if (!Array.isArray(ports) || ports.length === 0)
        return "";
    const values = new Set();
    for (const port of ports) {
        const publicPort = port.PublicPort != null ? String(port.PublicPort) : "";
        const privatePort = port.PrivatePort != null ? String(port.PrivatePort) : "";
        const kind = port.Type != null ? String(port.Type) : "tcp";
        if (publicPort)
            values.add(`${publicPort}->${privatePort}/${kind}`);
        else
            values.add(`${privatePort}/${kind}`);
    }
    return [...values].join(",");
}
function yamlQuote(value) {
    return JSON.stringify(value);
}
function yamlScalar(value) {
    if (typeof value === "string")
        return yamlQuote(value);
    if (typeof value === "number" || typeof value === "boolean")
        return String(value);
    if (value == null)
        return '""';
    return yamlQuote(String(value));
}
function pushSection(lines, title, values) {
    if (values.length === 0)
        return;
    lines.push(`    ${title}:`);
    for (const value of values)
        lines.push(`      - ${value}`);
}
function asJsonRecord(value) {
    return value && typeof value === "object" && !Array.isArray(value) ? { ...value } : {};
}
function asStringArray(value) {
    return Array.isArray(value) ? value.filter((entry) => typeof entry === "string") : [];
}
function buildUpgradeMountConfig(container) {
    const hostConfig = asJsonRecord(container.HostConfig);
    const mounts = Array.isArray(container.Mounts) ? container.Mounts : [];
    if (mounts.length === 0)
        return hostConfig;
    const binds = [];
    const mountSpecs = [];
    for (const mount of mounts) {
        const type = typeof mount.Type === "string" ? mount.Type : "";
        const destination = typeof mount.Destination === "string" ? mount.Destination : "";
        if (!type || !destination)
            continue;
        if (type === "bind") {
            const source = typeof mount.Source === "string" ? mount.Source : "";
            if (!source)
                continue;
            binds.push(`${source}:${destination}${mount.RW === false ? ":ro" : ""}`);
            continue;
        }
        const sourceName = typeof mount.Name === "string" && mount.Name.trim()
            ? mount.Name.trim()
            : (typeof mount.Source === "string" ? mount.Source : "").trim();
        if (!sourceName)
            continue;
        const spec = {
            Type: type,
            Source: sourceName,
            Target: destination,
        };
        if (mount.RW === false)
            spec.ReadOnly = true;
        mountSpecs.push(spec);
    }
    if (binds.length > 0)
        hostConfig.Binds = binds;
    if (mountSpecs.length > 0)
        hostConfig.Mounts = mountSpecs;
    return hostConfig;
}
function buildUpgradeNetworkingConfig(container) {
    const networkSettings = asJsonRecord(container.NetworkSettings);
    const networks = asJsonRecord(networkSettings.Networks);
    const endpointsConfig = {};
    for (const [networkName, rawValue] of Object.entries(networks)) {
        const value = asJsonRecord(rawValue);
        const endpoint = {};
        const aliases = asStringArray(value.Aliases);
        const links = asStringArray(value.Links);
        if (Object.keys(asJsonRecord(value.IPAMConfig)).length > 0)
            endpoint.IPAMConfig = asJsonRecord(value.IPAMConfig);
        if (aliases.length > 0)
            endpoint.Aliases = aliases;
        if (links.length > 0)
            endpoint.Links = links;
        if (typeof value.MacAddress === "string" && value.MacAddress.trim())
            endpoint.MacAddress = value.MacAddress.trim();
        if (Object.keys(asJsonRecord(value.DriverOpts)).length > 0)
            endpoint.DriverOpts = asJsonRecord(value.DriverOpts);
        if (typeof value.GwPriority === "number" && Number.isFinite(value.GwPriority))
            endpoint.GwPriority = value.GwPriority;
        endpointsConfig[networkName] = endpoint;
    }
    return Object.keys(endpointsConfig).length > 0 ? { EndpointsConfig: endpointsConfig } : undefined;
}
function buildContainerCreateSpec(container, targetImage) {
    const config = asJsonRecord(container.Config);
    const rawName = typeof container.Name === "string" ? normalizeContainerName(container.Name) : "";
    const name = rawName || normalizeContainerName(typeof config.Hostname === "string" ? config.Hostname : "") || "container";
    const hostConfig = buildUpgradeMountConfig(container);
    const body = {
        ...config,
        Image: targetImage,
    };
    if (Object.keys(hostConfig).length > 0)
        body.HostConfig = hostConfig;
    const networkingConfig = buildUpgradeNetworkingConfig(container);
    if (networkingConfig)
        body.NetworkingConfig = networkingConfig;
    return { name, body };
}
function parseComposeMappings(content, stackId, stackName) {
    const serviceNames = [];
    const containerNames = [];
    let inServices = false;
    let currentService = null;
    for (const line of content.split(/\r?\n/)) {
        const trimmed = line.trim();
        if (!inServices) {
            if (trimmed === "services:")
                inServices = true;
            continue;
        }
        if (!trimmed || trimmed.startsWith("#"))
            continue;
        if (/^[A-Za-z0-9_.-]+:\s*$/.test(line))
            break;
        const serviceMatch = line.match(/^ {2}([A-Za-z0-9_.-]+):\s*$/);
        if (serviceMatch) {
            currentService = serviceMatch[1];
            serviceNames.push(currentService);
            containerNames.push(currentService);
            continue;
        }
        if (!currentService)
            continue;
        const containerMatch = line.match(/^\s{4}container_name:\s*(.+?)\s*$/);
        if (containerMatch) {
            const containerName = normalizeContainerName(containerMatch[1]);
            if (containerName && !containerNames.includes(containerName))
                containerNames.push(containerName);
        }
    }
    return { stackId, stackName, serviceNames, containerNames };
}
function buildContainerComposeService(container) {
    const lines = ["services:"];
    const rawName = typeof container.Name === "string" ? normalizeContainerName(container.Name) : "container";
    const serviceName = rawName.replace(/[^A-Za-z0-9_.-]+/g, "-") || "container";
    const image = typeof container.Config?.Image === "string" ? container.Config.Image : "";
    const hostname = typeof container.Config?.Hostname === "string" ? container.Config.Hostname : "";
    const restart = typeof container.HostConfig?.RestartPolicy?.Name === "string" ? container.HostConfig.RestartPolicy.Name : "";
    const env = Array.isArray(container.Config?.Env) ? container.Config.Env.filter((entry) => typeof entry === "string") : [];
    const binds = Array.isArray(container.HostConfig?.Binds) ? container.HostConfig.Binds.filter((entry) => typeof entry === "string") : [];
    const portBindings = container.HostConfig?.PortBindings;
    lines.push(`  ${serviceName}:`);
    if (rawName)
        lines.push(`    container_name: ${rawName}`);
    if (hostname && hostname !== rawName && !/^[0-9a-f]{12,}$/i.test(hostname))
        lines.push(`    hostname: ${hostname}`);
    if (image)
        lines.push(`    image: ${image}`);
    if (restart && restart !== "no")
        lines.push(`    restart: ${restart}`);
    const portLines = [];
    if (portBindings && typeof portBindings === "object") {
        for (const [privatePort, bindings] of Object.entries(portBindings)) {
            const [containerPort, protocol = "tcp"] = privatePort.split("/");
            if (!Array.isArray(bindings) || bindings.length === 0) {
                portLines.push(yamlQuote(protocol === "tcp" ? containerPort : `${containerPort}/${protocol}`));
                continue;
            }
            for (const binding of bindings) {
                const hostPort = typeof binding?.HostPort === "string" ? binding.HostPort : "";
                const hostIp = typeof binding?.HostIp === "string" ? binding.HostIp : "";
                const suffix = protocol === "tcp" ? containerPort : `${containerPort}/${protocol}`;
                if (hostPort && hostIp && hostIp !== "0.0.0.0" && hostIp !== "::") {
                    portLines.push(yamlQuote(`${hostIp}:${hostPort}:${suffix}`));
                }
                else if (hostPort) {
                    portLines.push(yamlQuote(`${hostPort}:${suffix}`));
                }
                else {
                    portLines.push(yamlQuote(suffix));
                }
            }
        }
    }
    pushSection(lines, "ports", portLines);
    pushSection(lines, "volumes", binds.map((entry) => yamlQuote(entry)));
    pushSection(lines, "environment", env.map((entry) => yamlScalar(entry)));
    return `${lines.join("\n")}\n`;
}
export async function resolvePortainerAuth(apiTokenKeychain) {
    const entry = await getKeychainEntry(apiTokenKeychain);
    const token = entry.secret.trim();
    if (!token) {
        throw new Error(`Keychain entry ${apiTokenKeychain} must provide a Portainer API token in the secret field.`);
    }
    const baseUrl = entry.username?.trim() || null;
    return { base_url: baseUrl, token };
}
export async function discoverPortainerInstances() {
    const envBase = (process.env.PICLAW_PORTAINER_BASE || process.env.PORTAINER_BASE || "").trim() || null;
    const keychains = listKeychainEntries()
        .map((entry) => entry.name)
        .filter((name) => name.startsWith("portainer/"));
    const candidates = [];
    for (const name of keychains) {
        try {
            const auth = await resolvePortainerAuth(name);
            candidates.push({
                source: name === DEFAULT_PORTAINER_KEYCHAIN ? "default-keychain" : "keychain",
                base_url: envBase || auth.base_url,
                api_token_keychain: name,
                allow_insecure_tls: true,
            });
        }
        catch (error) {
            debugSuppressedError(log, "Skipping unusable Portainer discovery keychain entry.", error, {
                operation: "portainer.discover_instances.resolve_auth",
                apiTokenKeychain: name,
            });
        }
    }
    const uniqueCandidates = candidates.filter((candidate, index, array) => array.findIndex((entry) => entry.api_token_keychain === candidate.api_token_keychain && entry.base_url === candidate.base_url) === index);
    const defaultCandidate = uniqueCandidates.find((candidate) => candidate.api_token_keychain === DEFAULT_PORTAINER_KEYCHAIN)
        ?? uniqueCandidates[0]
        ?? null;
    return {
        default_candidate: defaultCandidate,
        candidates: uniqueCandidates,
    };
}
export async function requestPortainerApi(config, request) {
    const auth = await resolvePortainerAuth(config.api_token_keychain);
    const baseUrl = normalizeBaseUrl(config.base_url || auth.base_url || "");
    const path = normalizeApiPath(request.path);
    const query = toSearchParams(request.query);
    const url = `${baseUrl}${path}${query.size ? `?${query.toString()}` : ""}`;
    const headers = {
        "X-API-Key": auth.token,
        Accept: "application/json",
        ...(request.headers || {}),
    };
    let bodyText;
    if (request.body !== undefined) {
        if (request.body_mode === "text") {
            headers["Content-Type"] = headers["Content-Type"] || "text/plain; charset=utf-8";
            bodyText = typeof request.body === "string" ? request.body : String(request.body);
        }
        else {
            headers["Content-Type"] = headers["Content-Type"] || "application/json";
            bodyText = JSON.stringify(request.body);
        }
    }
    const result = await requestExecutor({
        url,
        method: request.method,
        headers,
        ...(bodyText !== undefined ? { body: bodyText } : {}),
        allowInsecureTls: config.allow_insecure_tls,
    });
    const body = parseResponseBody(result.bodyText);
    if (result.status >= 400) {
        const redactedBody = await redactKeychainSecretsInText(typeof body === "string" ? body : JSON.stringify(body));
        throw new Error(`Portainer API ${request.method} ${path} failed with HTTP ${result.status}: ${redactedBody}`);
    }
    return {
        status: result.status,
        body,
        raw_body: result.bodyText,
        path,
        method: request.method,
    };
}
export class PortainerClient {
    config;
    constructor(config) {
        this.config = config;
    }
    async request(request) {
        return requestPortainerApi(this.config, request);
    }
    async listEndpoints() {
        const response = await this.request({ method: "GET", path: "/api/endpoints" });
        return Array.isArray(response.body) ? response.body : [];
    }
    async getEndpoint(endpointId) {
        const endpoints = await this.listEndpoints();
        const endpoint = endpoints.find((entry) => Number(entry.Id) === endpointId);
        if (!endpoint) {
            throw new Error(`Endpoint ${endpointId} not found.`);
        }
        return endpoint;
    }
    async resolveEndpoint(input) {
        const endpoints = await this.listEndpoints();
        if (typeof input.endpoint_id === "number" && input.endpoint_id > 0) {
            const byId = endpoints.find((entry) => Number(entry.Id) === Math.trunc(input.endpoint_id));
            if (byId)
                return byId;
        }
        const name = typeof input.name === "string" ? normalizeLookupName(input.name) : "";
        if (name) {
            const byName = endpoints.find((entry) => normalizeLookupName(String(entry.Name ?? "")) === name || normalizeLookupName(String(entry.URL ?? "")) === name);
            if (byName)
                return byName;
        }
        throw new Error(`Endpoint not found.`);
    }
    async pingEndpoint(endpointId) {
        const response = await this.request({
            method: "GET",
            path: `/api/endpoints/${endpointId}/docker/_ping`,
            headers: { Accept: "text/plain" },
        });
        const text = typeof response.body === "string" ? response.body : JSON.stringify(response.body);
        return {
            endpoint_id: endpointId,
            ok: String(text || "").trim().toUpperCase() === "OK",
            response: String(text || "").trim(),
        };
    }
    async getDockerInfo(endpointId) {
        const response = await this.request({ method: "GET", path: `/api/endpoints/${endpointId}/docker/info` });
        return (response.body ?? {});
    }
    async getDockerVersion(endpointId) {
        const response = await this.request({ method: "GET", path: `/api/endpoints/${endpointId}/docker/version` });
        return (response.body ?? {});
    }
    async getDockerSystemDf(endpointId) {
        const response = await this.request({ method: "GET", path: `/api/endpoints/${endpointId}/docker/system/df` });
        return (response.body ?? {});
    }
    async listStacks(endpointId) {
        const response = await this.request({ method: "GET", path: "/api/stacks" });
        const stacks = Array.isArray(response.body) ? response.body : [];
        if (!endpointId)
            return stacks;
        return stacks.filter((entry) => Number(entry.EndpointId) === endpointId);
    }
    async resolveStack(input) {
        const stacks = await this.listStacks(input.endpoint_id);
        if (typeof input.stack_id === "number" && input.stack_id > 0) {
            const byId = stacks.find((entry) => Number(entry.Id) === Math.trunc(input.stack_id));
            if (byId)
                return byId;
        }
        const stackName = typeof input.stack_name === "string" && input.stack_name.trim()
            ? normalizeLookupName(input.stack_name)
            : normalizeLookupName(typeof input.name === "string" ? input.name : "");
        if (stackName) {
            const byName = stacks.find((entry) => normalizeLookupName(String(entry.Name ?? "")) === stackName);
            if (byName)
                return byName;
        }
        throw new Error(`Stack not found.`);
    }
    async getStackFile(stackId) {
        const response = await this.request({ method: "GET", path: `/api/stacks/${stackId}/file` });
        const content = typeof response.body?.StackFileContent === "string" ? response.body.StackFileContent : "";
        if (!content)
            throw new Error(`Stack ${stackId} returned no stack file content.`);
        return content;
    }
    async createStandaloneStack(endpointId, name, stackFileContent) {
        const response = await this.request({
            method: "POST",
            path: "/api/stacks/create/standalone/string",
            query: { endpointId },
            body: { Name: name, StackFileContent: stackFileContent, Env: [] },
            body_mode: "json",
        });
        return (response.body ?? {});
    }
    async updateStack(endpointId, stackId, stackFileContent, options = {}) {
        const response = await this.request({
            method: "PUT",
            path: `/api/stacks/${stackId}`,
            query: { endpointId },
            body: { stackFileContent, env: [], ...(options.pull_image ? { pullImage: true } : {}) },
            body_mode: "json",
        });
        return (response.body ?? {});
    }
    async deleteStack(endpointId, stackId) {
        await this.request({
            method: "DELETE",
            path: `/api/stacks/${stackId}`,
            query: { endpointId },
        });
    }
    async listContainers(endpointId) {
        const response = await this.request({
            method: "GET",
            path: `/api/endpoints/${endpointId}/docker/containers/json`,
            query: { all: 1 },
        });
        return Array.isArray(response.body) ? response.body : [];
    }
    async inspectContainer(endpointId, containerId) {
        const response = await this.request({
            method: "GET",
            path: `/api/endpoints/${endpointId}/docker/containers/${encodeURIComponent(containerId)}/json`,
        });
        return (response.body ?? {});
    }
    async startContainer(endpointId, containerId) {
        await this.request({
            method: "POST",
            path: `/api/endpoints/${endpointId}/docker/containers/${encodeURIComponent(containerId)}/start`,
        });
    }
    async stopContainer(endpointId, containerId, timeoutSec) {
        await this.request({
            method: "POST",
            path: `/api/endpoints/${endpointId}/docker/containers/${encodeURIComponent(containerId)}/stop`,
            ...(typeof timeoutSec === "number" && timeoutSec > 0 ? { query: { t: Math.trunc(timeoutSec) } } : {}),
        });
    }
    async restartContainer(endpointId, containerId, timeoutSec) {
        await this.request({
            method: "POST",
            path: `/api/endpoints/${endpointId}/docker/containers/${encodeURIComponent(containerId)}/restart`,
            ...(typeof timeoutSec === "number" && timeoutSec > 0 ? { query: { t: Math.trunc(timeoutSec) } } : {}),
        });
    }
    async renameContainer(endpointId, containerId, name) {
        await this.request({
            method: "POST",
            path: `/api/endpoints/${endpointId}/docker/containers/${encodeURIComponent(containerId)}/rename`,
            query: { name },
        });
    }
    async createContainer(endpointId, name, body) {
        const response = await this.request({
            method: "POST",
            path: `/api/endpoints/${endpointId}/docker/containers/create`,
            query: { name },
            body,
            body_mode: "json",
        });
        return (response.body ?? {});
    }
    async getContainerLogs(endpointId, containerId, options = {}) {
        const response = await this.request({
            method: "GET",
            path: `/api/endpoints/${endpointId}/docker/containers/${encodeURIComponent(containerId)}/logs`,
            query: {
                stdout: true,
                stderr: true,
                tail: typeof options.tail === "number" && options.tail > 0 ? Math.trunc(options.tail) : 200,
                timestamps: options.timestamps === true,
            },
            headers: { Accept: "text/plain" },
        });
        return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
    }
    async getContainerMounts(endpointId, containerId) {
        const payload = await this.inspectContainer(endpointId, containerId);
        return Array.isArray(payload.Mounts) ? payload.Mounts : [];
    }
    async deleteContainer(endpointId, containerId, force) {
        await this.request({
            method: "DELETE",
            path: `/api/endpoints/${endpointId}/docker/containers/${encodeURIComponent(containerId)}`,
            query: force ? { force: true, v: true } : undefined,
        });
    }
    async listImages(endpointId) {
        const response = await this.request({
            method: "GET",
            path: `/api/endpoints/${endpointId}/docker/images/json`,
            query: { all: 1 },
        });
        return Array.isArray(response.body) ? response.body : [];
    }
    async inspectImage(endpointId, image) {
        const response = await this.request({
            method: "GET",
            path: `/api/endpoints/${endpointId}/docker/images/${encodeURIComponent(image)}/json`,
        });
        return (response.body ?? {});
    }
    async pullImage(endpointId, image) {
        const [fromImage, tag = "latest"] = image.includes(":") ? [image.slice(0, image.lastIndexOf(":")), image.slice(image.lastIndexOf(":") + 1)] : [image, "latest"];
        const response = await this.request({
            method: "POST",
            path: `/api/endpoints/${endpointId}/docker/images/create`,
            query: { fromImage, tag },
            headers: { Accept: "text/plain" },
        });
        return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
    }
    async deleteImage(endpointId, image, force) {
        const response = await this.request({
            method: "DELETE",
            path: `/api/endpoints/${endpointId}/docker/images/${encodeURIComponent(image)}`,
            ...(force ? { query: { force: true } } : {}),
        });
        return response.body;
    }
    async checkImageUpdate(endpointId, image) {
        const local = await this.inspectImage(endpointId, image);
        const response = await this.request({
            method: "GET",
            path: `/api/endpoints/${endpointId}/docker/distribution/${encodeURIComponent(image)}/json`,
        });
        const remote = (response.body ?? {});
        const localDigests = Array.isArray(local.RepoDigests)
            ? local.RepoDigests.filter((entry) => typeof entry === "string")
            : [];
        const remoteDigest = typeof remote.Descriptor?.digest === "string"
            ? String(remote.Descriptor.digest)
            : null;
        const upToDate = !!remoteDigest && localDigests.some((entry) => entry.endsWith(`@${remoteDigest}`) || entry.endsWith(remoteDigest));
        return {
            image,
            local_id: typeof local.Id === "string" ? local.Id : null,
            local_repo_digests: localDigests,
            remote_digest: remoteDigest,
            up_to_date: upToDate,
            remote,
        };
    }
    async pruneImages(endpointId, allUnused) {
        const response = await this.request({
            method: "POST",
            path: `/api/endpoints/${endpointId}/docker/images/prune`,
            ...(allUnused ? { query: { filters: { dangling: ["false"] } } } : {}),
        });
        return response.body;
    }
    async listVolumes(endpointId) {
        const response = await this.request({
            method: "GET",
            path: `/api/endpoints/${endpointId}/docker/volumes`,
        });
        return Array.isArray(response.body?.Volumes)
            ? (response.body.Volumes)
            : [];
    }
    async inspectVolume(endpointId, volumeName) {
        const response = await this.request({
            method: "GET",
            path: `/api/endpoints/${endpointId}/docker/volumes/${encodeURIComponent(volumeName)}`,
        });
        return (response.body ?? {});
    }
    async createVolume(endpointId, body) {
        const response = await this.request({
            method: "POST",
            path: `/api/endpoints/${endpointId}/docker/volumes/create`,
            body,
            body_mode: "json",
        });
        return (response.body ?? {});
    }
    async deleteVolume(endpointId, volumeName, force) {
        await this.request({
            method: "DELETE",
            path: `/api/endpoints/${endpointId}/docker/volumes/${encodeURIComponent(volumeName)}`,
            ...(force ? { query: { force: true } } : {}),
        });
    }
    async pruneVolumes(endpointId) {
        const response = await this.request({ method: "POST", path: `/api/endpoints/${endpointId}/docker/volumes/prune` });
        return response.body;
    }
    async listNetworks(endpointId) {
        const response = await this.request({ method: "GET", path: `/api/endpoints/${endpointId}/docker/networks` });
        return Array.isArray(response.body) ? response.body : [];
    }
    async resolveNetwork(endpointId, input) {
        const networkId = typeof input.network_id === "string" ? input.network_id.trim() : "";
        const name = typeof input.name === "string" ? normalizeLookupName(input.name) : "";
        const networks = await this.listNetworks(endpointId);
        if (networkId) {
            const byId = networks.find((entry) => String(entry.Id ?? "").startsWith(networkId));
            if (byId)
                return byId;
        }
        if (name) {
            const byName = networks.find((entry) => normalizeLookupName(String(entry.Name ?? "")) === name);
            if (byName)
                return byName;
        }
        throw new Error(`Network not found on endpoint ${endpointId}.`);
    }
    async inspectNetwork(endpointId, networkId) {
        const response = await this.request({ method: "GET", path: `/api/endpoints/${endpointId}/docker/networks/${encodeURIComponent(networkId)}` });
        return (response.body ?? {});
    }
    async createNetwork(endpointId, body) {
        const response = await this.request({
            method: "POST",
            path: `/api/endpoints/${endpointId}/docker/networks/create`,
            body,
            body_mode: "json",
        });
        return (response.body ?? {});
    }
    async deleteNetwork(endpointId, networkId) {
        await this.request({ method: "DELETE", path: `/api/endpoints/${endpointId}/docker/networks/${encodeURIComponent(networkId)}` });
    }
    async execContainer(endpointId, containerId, input) {
        const wrappedCommand = await buildInjectedExecCommand(input.shell_family ?? "posix", input.command, input.command_args || []);
        const createResponse = await this.request({
            method: "POST",
            path: `/api/endpoints/${endpointId}/docker/containers/${encodeURIComponent(containerId)}/exec`,
            body: {
                AttachStdout: true,
                AttachStderr: true,
                Tty: false,
                Cmd: [wrappedCommand.command, ...wrappedCommand.commandArgs],
                ...(Object.keys(wrappedCommand.env).length > 0
                    ? { Env: Object.entries(wrappedCommand.env).map(([key, value]) => `${key}=${value}`) }
                    : {}),
            },
            body_mode: "json",
        });
        const execId = typeof createResponse.body?.Id === "string"
            ? String(createResponse.body.Id)
            : "";
        if (!execId)
            throw new Error(`Portainer did not return an exec ID for container ${containerId}.`);
        const startResponse = await this.request({
            method: "POST",
            path: `/api/endpoints/${endpointId}/docker/exec/${encodeURIComponent(execId)}/start`,
            body: { Detach: false, Tty: false },
            body_mode: "json",
            headers: { Accept: "text/plain" },
        });
        const inspectResponse = await this.request({
            method: "GET",
            path: `/api/endpoints/${endpointId}/docker/exec/${encodeURIComponent(execId)}/json`,
        });
        const rawOutput = typeof startResponse.body === "string" ? startResponse.body : JSON.stringify(startResponse.body);
        const decodedOutput = decodeDockerMultiplexedText(rawOutput);
        return {
            exec_id: execId,
            output: await redactKeychainSecretsInText(decodedOutput),
            inspect: inspectResponse.body,
        };
    }
    async getStackServiceMaps(endpointId) {
        const stacks = await this.listStacks(endpointId);
        const mappings = [];
        for (const stack of stacks) {
            const stackId = Number(stack.Id);
            if (!Number.isFinite(stackId) || stackId <= 0)
                continue;
            const stackName = typeof stack.Name === "string" ? stack.Name : String(stackId);
            try {
                const content = await this.getStackFile(stackId);
                mappings.push(parseComposeMappings(content, stackId, stackName));
            }
            catch (error) {
                debugSuppressedError(log, "Skipping unreadable Portainer stack file during ownership mapping.", error, {
                    operation: "portainer.get_stack_service_maps.read_stack_file",
                    endpointId,
                    stackId,
                    stackName,
                });
            }
        }
        return mappings;
    }
    async resolveContainer(endpointId, input) {
        const id = input.container_id?.trim();
        const name = input.name?.trim();
        if (!id && !name) {
            throw new Error(`Portainer container workflows require container_id or name.`);
        }
        const containers = await this.listContainers(endpointId);
        if (id) {
            const byId = containers.find((entry) => typeof entry.Id === "string" && entry.Id.startsWith(id));
            if (byId)
                return byId;
        }
        if (name) {
            const normalized = normalizeContainerName(name);
            const byName = containers.find((entry) => Array.isArray(entry.Names) && entry.Names.some((value) => normalizeContainerName(value) === normalized));
            if (byName)
                return byName;
        }
        throw new Error(`Container not found on endpoint ${endpointId}.`);
    }
    async listContainerRows(endpointId, unmanagedOnly) {
        const containers = await this.listContainers(endpointId);
        const mappings = await this.getStackServiceMaps(endpointId);
        const ownership = new Map();
        for (const mapping of mappings) {
            for (const name of mapping.containerNames)
                ownership.set(normalizeContainerName(name), mapping.stackName);
        }
        const rows = containers.map((container) => {
            const name = normalizeContainerName(Array.isArray(container.Names) && container.Names[0] ? container.Names[0] : String(container.Id ?? ""));
            return {
                id: String(container.Id ?? ""),
                name,
                image: String(container.Image ?? ""),
                state: String(container.State ?? ""),
                status: String(container.Status ?? ""),
                ports: formatPorts(container.Ports),
                stack: ownership.get(name) || null,
            };
        });
        return unmanagedOnly ? rows.filter((entry) => !entry.stack) : rows;
    }
    async buildContainerCompose(endpointId, input) {
        const container = await this.resolveContainer(endpointId, input);
        const id = typeof container.Id === "string" ? container.Id : "";
        if (!id) {
            throw new Error(`Container on endpoint ${endpointId} has no ID.`);
        }
        const payload = await this.inspectContainer(endpointId, id);
        return { id, compose: buildContainerComposeService(payload) };
    }
    async resolveContainerStack(endpointId, input) {
        const container = await this.resolveContainer(endpointId, input);
        const name = normalizeContainerName(Array.isArray(container.Names) && container.Names[0] ? container.Names[0] : String(container.Id ?? ""));
        if (!name)
            return null;
        const mappings = await this.getStackServiceMaps(endpointId);
        for (const mapping of mappings) {
            if (mapping.containerNames.includes(name))
                return mapping.stackName;
        }
        return null;
    }
    async upgradeContainer(endpointId, input) {
        const container = await this.resolveContainer(endpointId, input);
        const oldId = typeof container.Id === "string" ? container.Id : "";
        if (!oldId)
            throw new Error(`Container on endpoint ${endpointId} has no ID.`);
        const inspected = await this.inspectContainer(endpointId, oldId);
        const currentName = normalizeContainerName(typeof inspected.Name === "string" ? inspected.Name : Array.isArray(container.Names) && container.Names[0] ? container.Names[0] : oldId);
        const stackName = await this.resolveContainerStack(endpointId, { container_id: oldId, name: currentName });
        if (stackName) {
            throw new Error(`Container ${currentName} belongs to stack ${stackName}; use stack.update instead.`);
        }
        const currentImage = typeof inspected.Config?.Image === "string"
            ? String(inspected.Config.Image)
            : String(container.Image ?? "");
        const targetImage = requireText(input.image ?? currentImage, "image", "container.upgrade");
        const pullOutput = await this.pullImage(endpointId, targetImage);
        const backupName = `${currentName}-backup-${Date.now().toString(36)}`;
        let stoppedOld = false;
        let renamedOld = false;
        try {
            await this.stopContainer(endpointId, oldId, input.timeout_sec);
            stoppedOld = true;
            await this.renameContainer(endpointId, oldId, backupName);
            renamedOld = true;
            const createSpec = buildContainerCreateSpec(inspected, targetImage);
            const created = await this.createContainer(endpointId, currentName, createSpec.body);
            const newId = typeof created.Id === "string" ? created.Id : "";
            if (!newId)
                throw new Error(`Portainer did not return a new container ID for ${currentName}.`);
            try {
                await this.startContainer(endpointId, newId);
            }
            catch (error) {
                try {
                    await this.deleteContainer(endpointId, newId, true);
                }
                catch (cleanupError) {
                    debugSuppressedError(log, "Failed to remove the newly created Portainer container during upgrade rollback.", cleanupError, {
                        operation: "portainer.upgrade_container.cleanup_new_container",
                        endpointId,
                        currentName,
                        newId,
                    });
                }
                throw error;
            }
            let previousContainerDeleted = true;
            let previousContainerDeleteError = null;
            try {
                await this.deleteContainer(endpointId, oldId, input.force === true);
            }
            catch (error) {
                previousContainerDeleted = false;
                previousContainerDeleteError = error instanceof Error ? error.message : String(error);
            }
            return {
                ok: true,
                endpoint_id: endpointId,
                name: currentName,
                old_id: oldId,
                new_id: newId,
                current_image: currentImage,
                target_image: targetImage,
                pull_output: pullOutput,
                backup_name: backupName,
                previous_container_deleted: previousContainerDeleted,
                ...(previousContainerDeleteError ? { previous_container_delete_error: previousContainerDeleteError } : {}),
            };
        }
        catch (error) {
            if (renamedOld) {
                try {
                    await this.renameContainer(endpointId, oldId, currentName);
                }
                catch (rollbackError) {
                    debugSuppressedError(log, "Failed to restore the original Portainer container name during upgrade rollback.", rollbackError, {
                        operation: "portainer.upgrade_container.restore_name",
                        endpointId,
                        currentName,
                        oldId,
                    });
                }
            }
            if (stoppedOld) {
                try {
                    await this.startContainer(endpointId, oldId);
                }
                catch (rollbackError) {
                    debugSuppressedError(log, "Failed to restart the original Portainer container during upgrade rollback.", rollbackError, {
                        operation: "portainer.upgrade_container.restart_original",
                        endpointId,
                        currentName,
                        oldId,
                    });
                }
            }
            throw new Error(`Failed to upgrade container ${currentName} on endpoint ${endpointId}: ${error instanceof Error ? error.message : String(error)}`, { cause: error });
        }
    }
    async upgradeManyContainers(endpointId, input) {
        const results = [];
        let upgraded = 0;
        let failed = 0;
        for (const rawName of input.names) {
            const name = normalizeContainerName(rawName);
            if (!name)
                continue;
            try {
                const result = await this.upgradeContainer(endpointId, {
                    name,
                    ...(typeof input.image === "string" ? { image: input.image } : {}),
                    ...(typeof input.timeout_sec === "number" ? { timeout_sec: input.timeout_sec } : {}),
                    ...(typeof input.force === "boolean" ? { force: input.force } : {}),
                });
                upgraded += 1;
                results.push({ name, ok: true, ...result });
            }
            catch (error) {
                failed += 1;
                results.push({ name, ok: false, error: error instanceof Error ? error.message : String(error) });
            }
        }
        return {
            endpoint_id: endpointId,
            total: results.length,
            upgraded,
            failed,
            ok: failed === 0,
            results,
        };
    }
}
export async function runPortainerWorkflow(config, input) {
    const client = new PortainerClient(config);
    const workflow = input.workflow;
    switch (workflow) {
        case "endpoint.list": {
            return { workflow, result: await client.listEndpoints() };
        }
        case "endpoint.resolve": {
            return { workflow, result: await client.resolveEndpoint({ endpoint_id: input.endpoint_id, name: input.name }) };
        }
        case "endpoint.inspect": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            return { workflow, result: await client.getEndpoint(endpointId) };
        }
        case "endpoint.ping": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            return { workflow, result: await client.pingEndpoint(endpointId) };
        }
        case "endpoint.docker_info": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            return { workflow, result: await client.getDockerInfo(endpointId) };
        }
        case "endpoint.docker_version": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            return { workflow, result: await client.getDockerVersion(endpointId) };
        }
        case "endpoint.system_df": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            return { workflow, result: await client.getDockerSystemDf(endpointId) };
        }
        case "stack.list": {
            return { workflow, result: await client.listStacks(input.endpoint_id) };
        }
        case "stack.resolve": {
            return { workflow, result: await client.resolveStack({ endpoint_id: input.endpoint_id, stack_id: input.stack_id, stack_name: input.stack_name, name: input.name }) };
        }
        case "stack.file": {
            const stack = await client.resolveStack({ endpoint_id: input.endpoint_id, stack_id: input.stack_id, stack_name: input.stack_name, name: input.name });
            const stackId = Number(stack.Id);
            return { workflow, result: { stack_id: stackId, content: await client.getStackFile(stackId) } };
        }
        case "stack.create_standalone": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const name = requireText(input.stack_name, "stack_name", workflow);
            const stackFileContent = requireText(input.stack_file_content, "stack_file_content", workflow);
            return {
                workflow,
                result: await client.createStandaloneStack(endpointId, name, stackFileContent),
            };
        }
        case "stack.update": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const stackId = requirePositiveInt(input.stack_id, "stack_id", workflow);
            const stackFileContent = requireText(input.stack_file_content, "stack_file_content", workflow);
            return {
                workflow,
                result: await client.updateStack(endpointId, stackId, stackFileContent),
            };
        }
        case "stack.pull_and_update": {
            const stack = await client.resolveStack({ endpoint_id: input.endpoint_id, stack_id: input.stack_id, stack_name: input.stack_name, name: input.name });
            const endpointId = Number(stack.EndpointId);
            const stackId = Number(stack.Id);
            if (!Number.isFinite(endpointId) || endpointId <= 0 || !Number.isFinite(stackId) || stackId <= 0) {
                throw new Error(`Workflow ${workflow} requires a resolvable stack endpoint/id.`);
            }
            const stackFileContent = await client.getStackFile(stackId);
            return {
                workflow,
                result: await client.updateStack(endpointId, stackId, stackFileContent, { pull_image: true }),
            };
        }
        case "stack.delete": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const stackId = requirePositiveInt(input.stack_id, "stack_id", workflow);
            await client.deleteStack(endpointId, stackId);
            return { workflow, result: { ok: true, endpoint_id: endpointId, stack_id: stackId } };
        }
        case "container.list": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            return { workflow, result: await client.listContainerRows(endpointId, input.unmanaged === true) };
        }
        case "container.resolve": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const container = await client.resolveContainer(endpointId, input);
            const id = typeof container.Id === "string" ? container.Id : "";
            const name = normalizeContainerName(Array.isArray(container.Names) && container.Names[0] ? container.Names[0] : id);
            const stack = await client.resolveContainerStack(endpointId, { container_id: id, name });
            return {
                workflow,
                result: {
                    id,
                    name,
                    image: String(container.Image ?? ""),
                    state: String(container.State ?? ""),
                    status: String(container.Status ?? ""),
                    stack,
                },
            };
        }
        case "container.inspect": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const container = await client.resolveContainer(endpointId, input);
            const id = typeof container.Id === "string" ? container.Id : "";
            if (!id)
                throw new Error(`Container on endpoint ${endpointId} has no ID.`);
            return { workflow, result: await client.inspectContainer(endpointId, id) };
        }
        case "container.compose": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            return { workflow, result: await client.buildContainerCompose(endpointId, input) };
        }
        case "container.start": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const container = await client.resolveContainer(endpointId, input);
            const id = typeof container.Id === "string" ? container.Id : "";
            if (!id)
                throw new Error(`Container on endpoint ${endpointId} has no ID.`);
            await client.startContainer(endpointId, id);
            const name = normalizeContainerName(Array.isArray(container.Names) && container.Names[0] ? container.Names[0] : id);
            return { workflow, result: { ok: true, endpoint_id: endpointId, id, name } };
        }
        case "container.stop": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const container = await client.resolveContainer(endpointId, input);
            const id = typeof container.Id === "string" ? container.Id : "";
            if (!id)
                throw new Error(`Container on endpoint ${endpointId} has no ID.`);
            await client.stopContainer(endpointId, id, input.timeout_sec);
            const name = normalizeContainerName(Array.isArray(container.Names) && container.Names[0] ? container.Names[0] : id);
            return { workflow, result: { ok: true, endpoint_id: endpointId, id, name } };
        }
        case "container.restart": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const container = await client.resolveContainer(endpointId, input);
            const id = typeof container.Id === "string" ? container.Id : "";
            if (!id)
                throw new Error(`Container on endpoint ${endpointId} has no ID.`);
            await client.restartContainer(endpointId, id, input.timeout_sec);
            const name = normalizeContainerName(Array.isArray(container.Names) && container.Names[0] ? container.Names[0] : id);
            return { workflow, result: { ok: true, endpoint_id: endpointId, id, name } };
        }
        case "container.logs": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const container = await client.resolveContainer(endpointId, input);
            const id = typeof container.Id === "string" ? container.Id : "";
            if (!id)
                throw new Error(`Container on endpoint ${endpointId} has no ID.`);
            return { workflow, result: { id, logs: await client.getContainerLogs(endpointId, id, { tail: input.tail, timestamps: input.timestamps }) } };
        }
        case "container.mounts": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const container = await client.resolveContainer(endpointId, input);
            const id = typeof container.Id === "string" ? container.Id : "";
            if (!id)
                throw new Error(`Container on endpoint ${endpointId} has no ID.`);
            return { workflow, result: { id, mounts: await client.getContainerMounts(endpointId, id) } };
        }
        case "container.exec": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const command = requireText(input.command, "command", workflow);
            const container = await client.resolveContainer(endpointId, input);
            const id = typeof container.Id === "string" ? container.Id : "";
            if (!id)
                throw new Error(`Container on endpoint ${endpointId} has no ID.`);
            return {
                workflow,
                result: await client.execContainer(endpointId, id, {
                    command,
                    ...(Array.isArray(input.command_args) ? { command_args: input.command_args } : {}),
                    ...(input.shell_family === "powershell" || input.shell_family === "posix" ? { shell_family: input.shell_family } : {}),
                }),
            };
        }
        case "container.upgrade": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            return {
                workflow,
                result: await client.upgradeContainer(endpointId, {
                    ...(typeof input.container_id === "string" ? { container_id: input.container_id } : {}),
                    ...(typeof input.name === "string" ? { name: input.name } : {}),
                    ...(typeof input.image === "string" ? { image: input.image } : {}),
                    ...(typeof input.timeout_sec === "number" ? { timeout_sec: input.timeout_sec } : {}),
                    ...(typeof input.force === "boolean" ? { force: input.force } : {}),
                }),
            };
        }
        case "container.upgrade_many": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const names = Array.isArray(input.names)
                ? input.names.map((entry) => normalizeContainerName(entry)).filter(Boolean)
                : [];
            if (names.length === 0) {
                throw new Error(`Workflow ${workflow} requires names.`);
            }
            return {
                workflow,
                result: await client.upgradeManyContainers(endpointId, {
                    names,
                    ...(typeof input.image === "string" ? { image: input.image } : {}),
                    ...(typeof input.timeout_sec === "number" ? { timeout_sec: input.timeout_sec } : {}),
                    ...(typeof input.force === "boolean" ? { force: input.force } : {}),
                }),
            };
        }
        case "container.delete": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const container = await client.resolveContainer(endpointId, input);
            const id = typeof container.Id === "string" ? container.Id : "";
            if (!id)
                throw new Error(`Container on endpoint ${endpointId} has no ID.`);
            await client.deleteContainer(endpointId, id, input.force === true);
            const name = normalizeContainerName(Array.isArray(container.Names) && container.Names[0] ? container.Names[0] : id);
            return { workflow, result: { ok: true, endpoint_id: endpointId, id, name } };
        }
        case "image.list": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            return { workflow, result: await client.listImages(endpointId) };
        }
        case "image.inspect": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const image = requireText(input.image ?? input.name, "image", workflow);
            return { workflow, result: await client.inspectImage(endpointId, image) };
        }
        case "image.pull": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const image = requireText(input.image ?? input.name, "image", workflow);
            return { workflow, result: { image, output: await client.pullImage(endpointId, image) } };
        }
        case "image.delete": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const image = requireText(input.image ?? input.name, "image", workflow);
            return { workflow, result: await client.deleteImage(endpointId, image, input.force === true) };
        }
        case "image.prune": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            return { workflow, result: await client.pruneImages(endpointId, input.all_unused === true) };
        }
        case "image.update_check": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const image = requireText(input.image ?? input.name, "image", workflow);
            return { workflow, result: await client.checkImageUpdate(endpointId, image) };
        }
        case "network.list": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            return { workflow, result: await client.listNetworks(endpointId) };
        }
        case "network.inspect": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const network = await client.resolveNetwork(endpointId, { network_id: input.network_id, name: input.name });
            const networkId = typeof network.Id === "string" ? network.Id : String(network.Id ?? "");
            return { workflow, result: await client.inspectNetwork(endpointId, networkId) };
        }
        case "network.create": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const name = requireText(input.name, "name", workflow);
            return {
                workflow,
                result: await client.createNetwork(endpointId, {
                    Name: name,
                    ...(typeof input.driver === "string" && input.driver.trim() ? { Driver: input.driver.trim() } : {}),
                    ...(typeof input.internal === "boolean" ? { Internal: input.internal } : {}),
                    ...(typeof input.attachable === "boolean" ? { Attachable: input.attachable } : {}),
                    ...(typeof input.enable_ipv6 === "boolean" ? { EnableIPv6: input.enable_ipv6 } : {}),
                    ...(input.labels ? { Labels: input.labels } : {}),
                    ...(input.options ? { Options: input.options } : {}),
                }),
            };
        }
        case "network.delete": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const network = await client.resolveNetwork(endpointId, { network_id: input.network_id, name: input.name });
            const networkId = typeof network.Id === "string" ? network.Id : String(network.Id ?? "");
            await client.deleteNetwork(endpointId, networkId);
            return { workflow, result: { ok: true, endpoint_id: endpointId, id: networkId, name: String(network.Name ?? input.name ?? networkId) } };
        }
        case "volume.list": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            return { workflow, result: await client.listVolumes(endpointId) };
        }
        case "volume.inspect": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const volumeName = requireText(input.volume_name ?? input.name, "volume_name", workflow);
            return { workflow, result: await client.inspectVolume(endpointId, volumeName) };
        }
        case "volume.create": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const name = requireText(input.volume_name ?? input.name, "volume_name", workflow);
            return {
                workflow,
                result: await client.createVolume(endpointId, {
                    Name: name,
                    ...(typeof input.driver === "string" && input.driver.trim() ? { Driver: input.driver.trim() } : {}),
                    ...(input.labels ? { Labels: input.labels } : {}),
                    ...(input.options ? { DriverOpts: input.options } : {}),
                }),
            };
        }
        case "volume.delete": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            const volumeName = requireText(input.volume_name ?? input.name, "volume_name", workflow);
            await client.deleteVolume(endpointId, volumeName, input.force === true);
            return { workflow, result: { ok: true, endpoint_id: endpointId, volume_name: volumeName } };
        }
        case "volume.prune": {
            const endpointId = requirePositiveInt(input.endpoint_id, "endpoint_id", workflow);
            return { workflow, result: await client.pruneVolumes(endpointId) };
        }
        default: {
            const exhaustive = workflow;
            throw new Error(`Unsupported Portainer workflow: ${exhaustive}`);
        }
    }
}
