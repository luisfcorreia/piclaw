import { expect, test } from "bun:test";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const TEST_SHELL = process.env.SHELL || "bash";
const ENTRYPOINT_PATH = resolve(import.meta.dir, "../../..", "entrypoint.sh");
const VALIDATE_SCRIPT_PATH = resolve(
  import.meta.dir,
  "../..",
  "scripts/validate-supervisor-config.ts",
);

function sourceEntrypointFunctions(): string {
  return `set -euo pipefail
source <(awk '/^apply_puid_pgid_remap$/{exit} {print}' ${JSON.stringify(ENTRYPOINT_PATH)})`;
}

function validateCommand(conf: string, extraEnv = ""): string {
  const envPrefix = [
    `SUPERVISOR_VALIDATE_SCRIPT=${JSON.stringify(VALIDATE_SCRIPT_PATH)}`,
    extraEnv,
  ]
    .filter(Boolean)
    .join(" ");
  return `${sourceEntrypointFunctions()}
${envPrefix} validate_supervisor_config ${JSON.stringify(conf)}`;
}

test("validate_supervisor_config passes for a valid minimal config", () => {
  const base = mkdtempSync(join(tmpdir(), "piclaw-validate-"));
  try {
    const fakeConf = join(base, "supervisord.conf");
    writeFileSync(fakeConf, "[supervisord]\nnodaemon=true\n", "utf8");

    const proc = Bun.spawnSync([TEST_SHELL, "-lc", validateCommand(fakeConf)], {
      cwd: base,
      stdout: "pipe",
      stderr: "pipe",
    });

    expect(proc.exitCode, proc.stderr.toString() || proc.stdout.toString()).toBe(0);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});

test("validate_supervisor_config fails when [supervisord] section is missing", () => {
  const base = mkdtempSync(join(tmpdir(), "piclaw-validate-"));
  try {
    const fakeConf = join(base, "supervisord.conf");
    writeFileSync(fakeConf, "[program:piclaw]\ncommand=/usr/bin/true\n", "utf8");

    const proc = Bun.spawnSync([TEST_SHELL, "-lc", validateCommand(fakeConf)], {
      cwd: base,
      stdout: "pipe",
      stderr: "pipe",
    });

    expect(proc.exitCode).not.toBe(0);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});

test("validate_supervisor_config fails for a nonexistent file", () => {
  const base = mkdtempSync(join(tmpdir(), "piclaw-validate-"));
  try {
    const proc = Bun.spawnSync(
      [
        TEST_SHELL,
        "-lc",
        `${sourceEntrypointFunctions()}
SUPERVISOR_VALIDATE_SCRIPT=${JSON.stringify(VALIDATE_SCRIPT_PATH)} validate_supervisor_config /nonexistent/supervisord.conf`,
      ],
      { cwd: base, stdout: "pipe", stderr: "pipe" },
    );

    expect(proc.exitCode).not.toBe(0);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});

test("validate_supervisor_config follows [include] files and fails on bad syntax", () => {
  const base = mkdtempSync(join(tmpdir(), "piclaw-validate-"));
  try {
    const confDir = join(base, "conf.d");
    mkdirSync(confDir);
    const fakeConf = join(base, "supervisord.conf");
    const badInclude = join(confDir, "bad.conf");

    writeFileSync(
      fakeConf,
      `[supervisord]\nnodaemon=true\n\n[include]\nfiles = ${confDir}/*.conf\n`,
      "utf8",
    );
    writeFileSync(badInclude, "[broken\nno_closing_bracket\n", "utf8");

    const proc = Bun.spawnSync([TEST_SHELL, "-lc", validateCommand(fakeConf)], {
      cwd: base,
      stdout: "pipe",
      stderr: "pipe",
    });

    expect(proc.exitCode).not.toBe(0);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});

test("validate_supervisor_config does NOT invoke the supervisord binary", () => {
  const base = mkdtempSync(join(tmpdir(), "piclaw-validate-"));
  const fakeSupervisord = join(base, "fake-supervisord.sh");
  const fakeConf = join(base, "supervisord.conf");

  writeFileSync(fakeConf, "[supervisord]\nnodaemon=true\n", "utf8");
  writeFileSync(
    fakeSupervisord,
    `#!/usr/bin/env bash
echo "supervisord invoked unexpectedly by validate_supervisor_config" >&2
exit 99
`,
    "utf8",
  );
  Bun.spawnSync(["chmod", "+x", fakeSupervisord]);

  try {
    const proc = Bun.spawnSync(
      [
        TEST_SHELL,
        "-lc",
        validateCommand(fakeConf, `SUPERVISORD_BIN=${JSON.stringify(fakeSupervisord)}`),
      ],
      { cwd: base, stdout: "pipe", stderr: "pipe" },
    );

    expect(
      proc.exitCode,
      `supervisord binary should not be invoked during validation: ${proc.stderr.toString()}`,
    ).toBe(0);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});
