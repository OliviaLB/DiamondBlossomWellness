import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.ResizeObserver = ResizeObserverMock;

// jsdom does not implement scrollIntoView
Element.prototype.scrollIntoView = () => {};

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
