import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// extend jest-dom matchers
expect.extend(matchers);

afterEach(() => {
  cleanup();
});

vi.mock('*.svg?react', () => ({
  default: vi.fn(() => null),
  ReactComponent: vi.fn(() => null),
}));

vi.mock('*.svg', () => ({
  default: 'svg-mock.svg',
}));
