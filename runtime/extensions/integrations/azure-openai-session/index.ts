import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

let cachedProviderModule: Promise<typeof import("../azure-openai.ts")> | null = null;
let cachedImagesModule: Promise<typeof import("../azure-openai-images.ts")> | null = null;

async function loadProviderModule(): Promise<typeof import("../azure-openai.ts")> {
  if (!cachedProviderModule) cachedProviderModule = import("../azure-openai.ts");
  return await cachedProviderModule;
}

async function loadImagesModule(): Promise<typeof import("../azure-openai-images.ts")> {
  if (!cachedImagesModule) cachedImagesModule = import("../azure-openai-images.ts");
  return await cachedImagesModule;
}

export default function register(pi: ExtensionAPI) {
  pi.on("context", async (event, ctx) => {
    const mod = await loadProviderModule();
    return await mod.repairAzureContext(event as { messages: any[] }, ctx as { model?: any });
  });

  pi.registerCommand("image", {
    description: "Generate an image with Azure OpenAI",
    handler: async (input) => {
      const mod = await loadImagesModule();
      await mod.executeAzureImageCommand(pi, input || "");
    },
  });

  pi.registerCommand("flux", {
    description: "Generate an image with Azure Foundry (FLUX.2-pro)",
    handler: async (input) => {
      const mod = await loadImagesModule();
      await mod.executeAzureFluxCommand(pi, input || "");
    },
  });
}
