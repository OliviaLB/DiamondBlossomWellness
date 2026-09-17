import type { ReactNode } from 'react';
import { createMemoryHistory, createRootRoute, createRouter, RouterProvider } from '@tanstack/react-router';

/**
 * Wraps `children` in a minimal, standalone Tanstack Router context - for
 * components (`NavLink`, `Navbar`, a `Layout` composing either, ...) that
 * render a router `Link` but aren't otherwise exercising real route
 * navigation or loader behaviour.
 */
export const renderWithRouter = (children: ReactNode, initialPath = '/') => {
  const router = createRouter({
    routeTree: createRootRoute({ component: () => children }),
    history: createMemoryHistory({ initialEntries: [initialPath] })
  });

  return <RouterProvider router={router} />;
};
