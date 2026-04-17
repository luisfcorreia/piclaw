import { createFileAttachmentsExtension } from "./file-attachments.js";
import { messagesCrud } from "./messages-crud.js";
import { modelControl } from "./model-control.js";
import { internalTools } from "./internal-tools.js";
import { runtimeScripts } from "./runtime-scripts.js";
import { toolActivation } from "./tool-activation.js";
import { sqlIntrospect } from "./sql-introspect.js";
import { scheduledTasks } from "./scheduled-tasks.js";
import { workspaceSearch } from "./workspace-search.js";
import { workspaceMemoryBootstrap } from "./workspace-memory-bootstrap.js";
import { dreamMaintenance } from "./dream-maintenance.js";
import { uiThemeExtension } from "./ui-theme.js";
import { smartCompaction } from "./smart-compaction.js";
import { sendAdaptiveCard } from "./send-adaptive-card.js";
import { sendDashboardWidget } from "./send-dashboard-widget.js";
import { openWorkspaceFile } from "./open-workspace-file.js";
import { exitProcess } from "./exit-process.js";
import { autoresearchSupervisor } from "./autoresearch-supervisor.js";
import { imageProcessing } from "./image-processing.js";
/** Build the built-in extension factory list used for session creation. */
export function createBuiltinExtensionFactories(options) {
    return [
        createFileAttachmentsExtension(options?.attachmentRegistry),
        messagesCrud,
        modelControl,
        internalTools,
        runtimeScripts,
        toolActivation,
        sqlIntrospect,
        scheduledTasks,
        workspaceSearch,
        workspaceMemoryBootstrap,
        dreamMaintenance,
        uiThemeExtension,
        smartCompaction,
        sendAdaptiveCard,
        sendDashboardWidget,
        openWorkspaceFile,
        exitProcess,
        autoresearchSupervisor,
        imageProcessing,
    ];
}
/** Array of all built-in extension factories to register on session creation. */
export const builtinExtensionFactories = createBuiltinExtensionFactories();
