import { describe, expect, test } from 'bun:test';

import { getAttachmentPreviewKind, getAttachmentPreviewLabel, isMarkdownAttachmentPreview } from '../../web/src/ui/attachment-preview.js';

describe('attachment preview helpers', () => {
    test('classifies previewable kinds for v1', () => {
        expect(getAttachmentPreviewKind('image/png')).toBe('image');
        expect(getAttachmentPreviewKind('application/pdf')).toBe('pdf');
        expect(getAttachmentPreviewKind('application/vnd.openxmlformats-officedocument.wordprocessingml.document')).toBe('office');
        expect(getAttachmentPreviewKind('application/xml', 'diagram.drawio')).toBe('drawio');
        expect(getAttachmentPreviewKind('text/plain')).toBe('text');
        expect(getAttachmentPreviewKind('application/json')).toBe('text');
    });

    test('distinguishes markdown from generic text previews', () => {
        expect(isMarkdownAttachmentPreview('text/markdown')).toBe(true);
        expect(isMarkdownAttachmentPreview('text/plain')).toBe(false);
        expect(isMarkdownAttachmentPreview('application/json')).toBe(false);
    });

    test('falls back to unsupported for non-previewable types', () => {
        expect(getAttachmentPreviewKind('application/zip')).toBe('unsupported');
        expect(getAttachmentPreviewKind('audio/mpeg')).toBe('unsupported');
        expect(getAttachmentPreviewKind(null)).toBe('unsupported');
    });

    test('provides stable user-facing labels', () => {
        expect(getAttachmentPreviewLabel('image')).toBe('Image preview');
        expect(getAttachmentPreviewLabel('pdf')).toBe('PDF preview');
        expect(getAttachmentPreviewLabel('office')).toBe('Office viewer');
        expect(getAttachmentPreviewLabel('drawio')).toBe('Draw.io preview (read-only)');
        expect(getAttachmentPreviewLabel('text')).toBe('Text preview');
        expect(getAttachmentPreviewLabel('unsupported')).toBe('Preview unavailable');
    });
});
