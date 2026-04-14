import { expect, test } from 'bun:test';

import { formatAgentStatusGitLabel } from '../../web/src/components/status.ts';

test('formatAgentStatusGitLabel shows repo basename and branch', () => {
  expect(formatAgentStatusGitLabel('/workspace/piclaw', 'main')).toBe('piclaw • main');
  expect(formatAgentStatusGitLabel('C:\\src\\demo', 'feature/x')).toBe('demo • feature/x');
  expect(formatAgentStatusGitLabel('/workspace/piclaw', '')).toBe('piclaw');
  expect(formatAgentStatusGitLabel('', 'main')).toBe('main');
});
