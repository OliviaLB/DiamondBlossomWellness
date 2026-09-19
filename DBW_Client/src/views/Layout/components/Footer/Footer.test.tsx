import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider
} from '@tanstack/react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { SERVICE_AREAS_TEXT } from '@constants/business';
import { TREATMENTS } from '@constants/services';
import { SITE } from '@constants/site';
import { renderWithRouter } from '../../../../../tests';
import Footer from './Footer';

const renderFooter = () => render(renderWithRouter(<Footer />));

describe('Footer', () => {
  afterEach(() => {
    SITE.telephone = undefined;
    SITE.email = undefined;
    vi.useRealTimers();
  });

  it('renders as the page footer with the business name linking home', async () => {
    renderFooter();

    const footer = await screen.findByRole('contentinfo');

    expect(within(footer).getByRole('link', { name: 'Diamond Blossom Wellness' })).toHaveAttribute('href', '/');
  });

  it('links to every page of the site', async () => {
    renderFooter();

    await screen.findByRole('contentinfo');

    ['Home', 'About Us', 'Services', 'FAQ', 'Contact Us'].forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
    });
  });

  it('links to each treatment on the services page', async () => {
    renderFooter();

    await screen.findByRole('contentinfo');

    TREATMENTS.forEach(({ id, title }) => {
      expect(screen.getByRole('link', { name: title })).toHaveAttribute('href', `/services?treatment=${id}`);
    });
  });

  it('shows the opening days and the towns it serves', async () => {
    renderFooter();

    expect(await screen.findByText('Open Tuesday to Saturday')).toBeInTheDocument();
    expect(screen.getByText(`Serving ${SERVICE_AREAS_TEXT}`)).toBeInTheDocument();
  });

  it('shows a copyright line for the current year', async () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2031-03-04'));
    renderFooter();

    expect(await screen.findByText(/© 2031 Diamond Blossom Wellness/)).toBeInTheDocument();
  });

  it('leaves out the telephone and email until they are set', async () => {
    renderFooter();

    await screen.findByRole('contentinfo');

    expect(screen.queryByRole('link', { name: /@/ })).not.toBeInTheDocument();
    expect(document.querySelector('a[href^="tel:"]')).not.toBeInTheDocument();
  });

  it('links the telephone and email once they are set', async () => {
    SITE.telephone = '01252 123 456';
    SITE.email = 'hello@example.co.uk';
    renderFooter();

    expect(await screen.findByRole('link', { name: '01252 123 456' })).toHaveAttribute('href', 'tel:01252123456');
    expect(screen.getByRole('link', { name: 'hello@example.co.uk' })).toHaveAttribute(
      'href',
      'mailto:hello@example.co.uk'
    );
  });

  it('takes the visitor to the contact page from the booking button', async () => {
    const user = userEvent.setup();
    const rootRoute = createRootRoute({
      component: () => (
        <>
          <Footer />
          <Outlet />
        </>
      )
    });
    const contactRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: '/contact-us',
      component: () => <p>contact page</p>
    });
    const router = createRouter({
      routeTree: rootRoute.addChildren([contactRoute]),
      history: createMemoryHistory({ initialEntries: ['/'] })
    });
    render(<RouterProvider router={router} />);

    await user.click(await screen.findByRole('button', { name: /Book a Consultation/ }));

    expect(await screen.findByText('contact page')).toBeInTheDocument();
  });
});
