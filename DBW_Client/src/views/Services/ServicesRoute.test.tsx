import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider
} from '@tanstack/react-router';
import { describe, expect, it } from 'vitest';
import { Home } from '../Home';
import { validateServicesSearch } from './Services.search';
import ServicesRoute from './ServicesRoute';

/** A real (memory-history) router with the same `/` and `/services` routes the app has, so navigation and the query string are exercised for real. */
const renderApp = (initialPath: string) => {
  const root = createRootRoute({ component: Outlet });
  const home = createRoute({ getParentRoute: () => root, path: '/', component: Home });
  const services = createRoute({
    getParentRoute: () => root,
    path: '/services',
    validateSearch: validateServicesSearch,
    component: ServicesRoute
  });
  const router = createRouter({
    routeTree: root.addChildren([home, services]),
    history: createMemoryHistory({ initialEntries: [initialPath] })
  });

  render(<RouterProvider router={router} />);

  return router;
};

describe('ServicesRoute', () => {
  it('opens on the treatment named in ?treatment=', async () => {
    renderApp('/services?treatment=facials');

    expect(await screen.findByRole('tab', { name: 'Facials' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('heading', { level: 2, name: 'Facials' })).toBeInTheDocument();
  });

  it('falls back to the first treatment when the param names nothing real', async () => {
    renderApp('/services?treatment=nope');

    expect(await screen.findByRole('tab', { name: 'Japanese Head Spa' })).toHaveAttribute('aria-selected', 'true');
  });

  it('writes the chosen treatment back to the URL', async () => {
    const user = userEvent.setup();
    const router = renderApp('/services');

    await user.click(await screen.findByRole('tab', { name: 'Scalp Massage' }));

    await waitFor(() => expect(router.state.location.search).toEqual({ treatment: 'scalp-massage' }));
    expect(screen.getByRole('tab', { name: 'Scalp Massage' })).toHaveAttribute('aria-selected', 'true');
  });

  it("opens that treatment when a homepage card's Learn more is clicked", async () => {
    const user = userEvent.setup();
    const router = renderApp('/');

    // Cards render in TREATMENTS order - the fifth is Relaxation Massage.
    const learnMore = await screen.findAllByRole('button', { name: 'Learn more' });
    await user.click(learnMore[4]);

    expect(await screen.findByRole('tab', { name: 'Relaxation Massage' })).toHaveAttribute('aria-selected', 'true');
    expect(router.state.location.pathname).toBe('/services');
    expect(router.state.location.search).toEqual({ treatment: 'relaxation-massage' });
  });
});
