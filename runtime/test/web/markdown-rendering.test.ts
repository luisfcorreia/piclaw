import { afterEach, expect, test } from 'bun:test';

const PreviousDOMParser = globalThis.DOMParser;

function decodeEntities(value: string) {
  return String(value || '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

afterEach(() => {
  if (PreviousDOMParser === undefined) {
    delete globalThis.DOMParser;
  } else {
    globalThis.DOMParser = PreviousDOMParser;
  }
});

test('prepareMarkdownSource preserves blockquote markers while escaping raw tags', async () => {
  globalThis.DOMParser = class {
    parseFromString(input: string) {
      return { documentElement: { textContent: decodeEntities(input) } } as any;
    }
  } as any;

  const { prepareMarkdownSource } = await import('../../web/src/markdown.ts');
  const { safeHtml } = prepareMarkdownSource('> `/login` is still a work in progress <script>alert(1)</script>');

  expect(safeHtml).toContain('> `/login` is still a work in progress');
  expect(safeHtml).toContain('&lt;script>alert(1)&lt;/script>');
  expect(safeHtml).not.toContain('&gt; `/login`');
});

test('prepareMarkdownSource restores allowed ruby, br, and span tags', async () => {
  globalThis.DOMParser = class {
    parseFromString(input: string) {
      return { documentElement: { textContent: decodeEntities(input) } } as any;
    }
  } as any;

  const { prepareMarkdownSource } = await import('../../web/src/markdown.ts');
  const { safeHtml } = prepareMarkdownSource('<ruby>状況把握<rt>じょうきょうはあく</rt></ruby><br/><span lang="ja" title="x > y">日本語</span>');

  expect(safeHtml).toContain('<ruby>状況把握<rt>じょうきょうはあく</rt></ruby>');
  expect(safeHtml).toContain('<br>');
  expect(safeHtml).toContain('<span lang="ja" title="x &gt; y">日本語</span>');
  expect(safeHtml).not.toContain('&lt;ruby&gt;');
  expect(safeHtml).not.toContain('&lt;br/');
  expect(safeHtml).not.toContain('&lt;span');
});

test('prepareMarkdownSource rewrites leading YAML frontmatter into a fenced yaml block', async () => {
  globalThis.DOMParser = class {
    parseFromString(input: string) {
      return { documentElement: { textContent: decodeEntities(input) } } as any;
    }
  } as any;

  const { prepareMarkdownSource } = await import('../../web/src/markdown.ts');
  const { safeHtml } = prepareMarkdownSource('---\ntitle: Test\ntags:\n  - demo\n---\n\n# Hello');

  expect(safeHtml).toContain('```yaml');
  expect(safeHtml).toContain('title: Test');
  expect(safeHtml).toContain('tags:');
  expect(safeHtml).toContain('- demo');
  expect(safeHtml).toContain('# Hello');
});

test('applySyntaxHighlighting adds token spans for supported fenced languages', async () => {
  globalThis.DOMParser = class {
    parseFromString(input: string) {
      return { documentElement: { textContent: decodeEntities(input) } } as any;
    }
  } as any;

  const { applySyntaxHighlighting } = await import('../../web/src/markdown.ts');
  const highlighted = applySyntaxHighlighting('<pre><code class="language-js">const answer = 42;</code></pre>');

  expect(highlighted).toContain('class="hljs language-js"');
  expect(highlighted).toContain('tok-keyword');
  expect(highlighted).toContain('tok-variableName');
  expect(highlighted).toContain('42');
});

test('applySyntaxHighlighting falls back to escaped plaintext for unsupported languages', async () => {
  globalThis.DOMParser = class {
    parseFromString(input: string) {
      return { documentElement: { textContent: decodeEntities(input) } } as any;
    }
  } as any;

  const { applySyntaxHighlighting } = await import('../../web/src/markdown.ts');
  const highlighted = applySyntaxHighlighting('<pre><code class="language-unknown">&lt;tag&gt;</code></pre>');

  expect(highlighted).toContain('class="hljs language-unknown"');
  expect(highlighted).toContain('&lt;tag&gt;');
  expect(highlighted).not.toContain('tok-keyword');
  expect(highlighted).not.toContain('<span class="tok-');
});
