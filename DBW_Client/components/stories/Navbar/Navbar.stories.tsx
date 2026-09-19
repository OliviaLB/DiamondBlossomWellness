import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { createMemoryHistory, createRootRoute, createRouter, RouterProvider } from '@tanstack/react-router';
import Navbar from './Navbar';
import type { NavLinkItem } from './Navbar.types';

/** `Navbar` renders `NavLink`s (Tanstack Router's `Link`), which need a router context to mount - a minimal, standalone one, just for the story canvas. */
const withRouter = (children: ReactNode) => {
  const router = createRouter({
    routeTree: createRootRoute({ component: () => children }),
    history: createMemoryHistory({ initialEntries: ['/'] })
  });

  return <RouterProvider router={router} />;
};

const LINKS: NavLinkItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact Us', to: '/contact-us' }
];

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: {
    businessName: 'Diamond Blossom Wellness',
    links: LINKS
  }
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Transparent by default - resize the canvas below the `md` breakpoint (or
 * use Storybook's viewport toolbar) to see the desktop links collapse behind
 * a hamburger button that opens the mobile drawer.
 */
export const Default: Story = {
  render: (args) =>
    withRouter(
      <div className="min-h-[32rem] bg-gradient-to-b from-primary-600 to-surface-app">
        <Navbar {...args} />
      </div>
    )
};

/** Simulates the "glassy" state a real page reaches once scrolled, by rendering enough content to scroll past the reveal threshold. */
export const Glassy: Story = {
  render: (args) =>
    withRouter(
      <div className="min-h-[48rem] bg-gradient-to-b from-primary-600 to-surface-app">
        <Navbar {...args} />
        <p className="px-8 pt-32 font-body text-sm text-ink-secondary">
          Scroll this canvas - the nav bar crossfades from transparent to a frosted, blurred surface once you pass the
          reveal threshold.
        </p>
      </div>
    )
};
