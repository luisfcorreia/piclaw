// @ts-nocheck
/**
 * mindmap-settings.ts — Mind Map editor settings pane (extension-contributed).
 */
import { html, useState } from '../../vendor/preact-htm.js';
import { registerSettingsPane } from './pane-registry.js';
import { NumberStepper, normalizeNumberValue } from './number-stepper.js';

function getBool(key, fallback) {
    try { const v = localStorage.getItem(key); return v === null ? fallback : v === 'true'; } catch { return fallback; }
}
function setBool(key, value) { try { localStorage.setItem(key, String(value)); } catch (e) { void e; } }
function getInt(key, fallback, min, max) {
    try {
        return normalizeNumberValue(localStorage.getItem(key), { fallback, min, max });
    } catch {
        return normalizeNumberValue(fallback, { fallback, min, max });
    }
}
function setInt(key, value) { try { localStorage.setItem(key, String(value)); } catch (e) { void e; } }

function MindmapSettingsSection() {
    const [autoExpand, setAutoExpand] = useState(() => getBool('piclaw_mindmap_auto_expand', true));
    const [nodeSpacing, setNodeSpacing] = useState(() => getInt('piclaw_mindmap_node_spacing', 40, 20, 100));
    const [animateTransitions, setAnimateTransitions] = useState(() => getBool('piclaw_mindmap_animate', true));

    return html`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${autoExpand}
                    onChange=${() => { const v = !autoExpand; setAutoExpand(v); setBool('piclaw_mindmap_auto_expand', v); }} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${NumberStepper}
                    label="node spacing"
                    value=${nodeSpacing}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(value) => { setNodeSpacing(value); setInt('piclaw_mindmap_node_spacing', value); }}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${animateTransitions}
                    onChange=${() => { const v = !animateTransitions; setAnimateTransitions(v); setBool('piclaw_mindmap_animate', v); }} />
            </div>
            <p class="settings-hint">Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `;
}

const iconMindmap = html`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;

registerSettingsPane({
    id: 'mindmap',
    label: 'Mind Map',
    icon: iconMindmap,
    component: MindmapSettingsSection,
    order: 170,
});
