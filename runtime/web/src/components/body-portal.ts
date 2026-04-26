// @ts-nocheck
import { render, useEffect, useLayoutEffect, useRef } from '../vendor/preact-htm.js';

export function BodyPortal({ children, className = '' }) {
    const hostRef = useRef(null);

    useEffect(() => {
        if (typeof document === 'undefined') return undefined;
        const host = document.createElement('div');
        hostRef.current = host;
        document.body.appendChild(host);
        return () => {
            if (hostRef.current === host) {
                hostRef.current = null;
            }
            try {
                render(null, host);
            } finally {
                host.remove();
            }
        };
    }, []);

    useEffect(() => {
        const host = hostRef.current;
        if (!host) return undefined;
        host.className = className || '';
        return undefined;
    }, [className]);

    useLayoutEffect(() => {
        const host = hostRef.current;
        if (!host) return undefined;
        render(children, host);
        return undefined;
    });

    return null;
}
