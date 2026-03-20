const TEXT_PREVIEW_TYPES = new Set([
  "application/json",
  "application/xml",
  "text/csv",
  "text/html",
  "text/markdown",
  "text/plain",
  "text/xml",
]);

const MARKDOWN_PREVIEW_TYPES = new Set([
  "text/markdown",
]);

const OFFICE_PREVIEW_TYPES = new Set([
  "application/msword",
  "application/rtf",
  "application/vnd.ms-excel",
  "application/vnd.ms-powerpoint",
  "application/vnd.oasis.opendocument.presentation",
  "application/vnd.oasis.opendocument.spreadsheet",
  "application/vnd.oasis.opendocument.text",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const DRAWIO_PREVIEW_TYPES = new Set([
  "application/vnd.jgraph.mxfile",
]);

function normalize(value: unknown): string {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

function isDrawioFilename(filename: unknown): boolean {
  const name = normalize(filename);
  return !!name && (
    name.endsWith(".drawio")
    || name.endsWith(".drawio.xml")
    || name.endsWith(".drawio.svg")
    || name.endsWith(".drawio.png")
  );
}

function isPdfFilename(filename: unknown): boolean {
  const name = normalize(filename);
  return !!name && name.endsWith(".pdf");
}

function isOfficeFilename(filename: unknown): boolean {
  const name = normalize(filename);
  return !!name && (
    name.endsWith(".docx")
    || name.endsWith(".doc")
    || name.endsWith(".odt")
    || name.endsWith(".rtf")
    || name.endsWith(".xlsx")
    || name.endsWith(".xls")
    || name.endsWith(".ods")
    || name.endsWith(".pptx")
    || name.endsWith(".ppt")
    || name.endsWith(".odp")
  );
}

export type AttachmentPreviewKind = "image" | "pdf" | "office" | "drawio" | "text" | "unsupported";

export function getAttachmentPreviewKind(contentType: unknown, filename?: unknown): AttachmentPreviewKind {
  const normalized = normalize(contentType);
  if (isDrawioFilename(filename) || DRAWIO_PREVIEW_TYPES.has(normalized)) return "drawio";
  if (isPdfFilename(filename) || normalized === "application/pdf") return "pdf";
  if (isOfficeFilename(filename) || OFFICE_PREVIEW_TYPES.has(normalized)) return "office";
  if (!normalized) return "unsupported";
  if (normalized.startsWith("image/")) return "image";
  if (TEXT_PREVIEW_TYPES.has(normalized) || normalized.startsWith("text/")) return "text";
  return "unsupported";
}

export function isMarkdownAttachmentPreview(contentType: unknown): boolean {
  const normalized = normalize(contentType);
  return MARKDOWN_PREVIEW_TYPES.has(normalized);
}

export function getAttachmentPreviewLabel(kind: AttachmentPreviewKind): string {
  switch (kind) {
    case "image":
      return "Image preview";
    case "pdf":
      return "PDF preview";
    case "office":
      return "Office viewer";
    case "drawio":
      return "Draw.io preview (read-only)";
    case "text":
      return "Text preview";
    default:
      return "Preview unavailable";
  }
}
