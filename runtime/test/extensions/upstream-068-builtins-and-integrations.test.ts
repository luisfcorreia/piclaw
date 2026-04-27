import { describe, expect, test } from "bun:test";
import "../helpers.js";
import { createFakeExtensionApi } from "./fake-extension-api.js";
import { imageProcessing } from "../../src/extensions/image-processing.js";
import officeToolsToolExtension from "../../extensions/integrations/office-tools-tool/index.ts";
import bunRunnerExtension from "../../extensions/integrations/bun-runner/index.ts";

function createUiRecorder() {
  const messages: Array<string | undefined> = [];
  const indicators: Array<{ frames?: string[]; intervalMs?: number } | undefined> = [];
  return {
    ctx: {
      hasUI: true,
      ui: {
        setWorkingMessage(message?: string) { messages.push(message); },
        setWorkingIndicator(options?: { frames?: string[]; intervalMs?: number }) { indicators.push(options); },
      },
    },
    messages,
    indicators,
  };
}

describe("Pi 0.68.0 built-in and packaged adoption", () => {
  test("image_process clears working indicator after missing-file failure", async () => {
    const fake = createFakeExtensionApi();
    imageProcessing(fake.api);
    const tool = fake.tools.get("image_process");
    if (!tool) throw new Error("image_process not registered");

    const ui = createUiRecorder();
    const result = await tool.execute("img-missing", {
      action: "resize",
      input: "missing.png",
      width: 100,
    }, undefined, undefined, ui.ctx);

    expect(result.details.error).toBe("not_found");
    expect(ui.messages[0]).toBe("Image: resizing missing.png…");
    expect(ui.messages[ui.messages.length - 1]).toBeUndefined();
    expect(ui.indicators[0]).toEqual({
      frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"],
      intervalMs: 90,
    });
    expect(ui.indicators[ui.indicators.length - 1]).toEqual({ frames: [] });
  });

  test("office_read and office_write clear working indicator on early validation failures", async () => {
    const fake = createFakeExtensionApi();
    officeToolsToolExtension(fake.api);
    const reader = fake.tools.get("office_read");
    const writer = fake.tools.get("office_write");
    if (!reader || !writer) throw new Error("office tools not registered");

    const readUi = createUiRecorder();
    const readResult = await reader.execute("office-read", { path: "missing.docx" }, undefined, undefined, { cwd: process.env.PICLAW_WORKSPACE, ...readUi.ctx });
    expect(readResult.details.ok).toBe(false);
    expect(readUi.messages[0]).toBe("Office: reading missing.docx…");
    expect(readUi.messages[readUi.messages.length - 1]).toBeUndefined();
    expect(readUi.indicators[readUi.indicators.length - 1]).toEqual({ frames: [] });

    const writeUi = createUiRecorder();
    const writeResult = await writer.execute("office-write", { path: "bad.txt", markdown: "hello" }, undefined, undefined, { cwd: process.env.PICLAW_WORKSPACE, ...writeUi.ctx });
    expect(writeResult.details.ok).toBe(false);
    expect(writeUi.messages[0]).toBe("Office: writing bad.txt…");
    expect(writeUi.messages[writeUi.messages.length - 1]).toBeUndefined();
    expect(writeUi.indicators[writeUi.indicators.length - 1]).toEqual({ frames: [] });
  });

  test("bun-runner remains a dedicated packaged integration and stays separate from bash", () => {
    const fake = createFakeExtensionApi();
    bunRunnerExtension(fake.api);
    expect(fake.tools.has("bun_run")).toBe(true);
    expect(fake.tools.has("bash")).toBe(false);
    expect(String(fake.tools.get("bun_run")?.description ?? "")).toContain("workspace Bun script");
  });
});
