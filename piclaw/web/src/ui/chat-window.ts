// @ts-nocheck

export function isStandaloneWebAppMode(runtime = {}) {
    const win = runtime.window ?? (typeof window !== 'undefined' ? window : null);
    const nav = runtime.navigator ?? (typeof navigator !== 'undefined' ? navigator : null);

    if (nav && nav.standalone === true) {
        return true;
    }

    if (!win || typeof win.matchMedia !== 'function') {
        return false;
    }

    const queries = [
        '(display-mode: standalone)',
        '(display-mode: minimal-ui)',
        '(display-mode: fullscreen)',
    ];
    return queries.some((query) => {
        try {
            return Boolean(win.matchMedia(query)?.matches);
        } catch {
            return false;
        }
    });
}

export function isMobileBrowserMode(runtime = {}) {
    const win = runtime.window ?? (typeof window !== 'undefined' ? window : null);
    const nav = runtime.navigator ?? (typeof navigator !== 'undefined' ? navigator : null);
    if (!win && !nav) return false;

    const userAgent = String(nav?.userAgent || '');
    const maxTouchPoints = Number(nav?.maxTouchPoints || 0);
    const mobileUa = /Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(userAgent);
    const coarsePointer = (() => {
        if (!win || typeof win.matchMedia !== 'function') return false;
        try {
            return Boolean(win.matchMedia('(pointer: coarse)')?.matches || win.matchMedia('(any-pointer: coarse)')?.matches);
        } catch {
            return false;
        }
    })();

    return Boolean(mobileUa || maxTouchPoints > 1 || coarsePointer);
}

export function getChatWindowOpenOptions(chatJid, runtime = {}) {
    if (isStandaloneWebAppMode(runtime)) {
        return null;
    }
    if (isMobileBrowserMode(runtime)) {
        return {
            target: '_blank',
            features: undefined,
            mode: 'tab',
        };
    }
    return {
        target: getChatWindowTarget(chatJid),
        features: 'popup=yes,width=900,height=960,resizable=yes,scrollbars=yes',
        mode: 'popup',
    };
}

export function buildChatWindowUrl(baseHref, chatJid, options = {}) {
    const url = new URL(String(baseHref || 'http://localhost/'));
    const normalizedChatJid = String(chatJid || '').trim() || 'web:default';
    url.searchParams.set('chat_jid', normalizedChatJid);
    if (options.chatOnly !== false) {
        url.searchParams.set('chat_only', '1');
    }
    return url.toString();
}

export function getChatWindowTarget(chatJid) {
    const normalized = String(chatJid || 'web:default')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9_-]+/g, '-');
    return `piclaw-chat-${normalized || 'default'}`;
}
