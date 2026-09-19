import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { createMemoryHistory, createRootRoute, createRouter, RouterProvider } from '@tanstack/react-router';
import NavLink from './NavLink';

/** `NavLink` renders Tanstack Router's own `Link`, which needs a router context to mount - a minimal, standalone one, just for the story canvas. */
const withRouter = (children: ReactNode) => {
  const router = createRouter({
    routeTree: createRootRoute({ component: () => children }),
    history: createMemoryHistory({ initialEntries: ['/'] })
  });

  return <RouterProvider router={router} />;
};

const meta = {
  title: 'Components/NavLink',
  component: NavLink,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['inline', 'block'] }
  },
  args: {
    label: 'Services',
    to: '/services'
  }
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

/** `inline` (default) - a compact text link for the desktop nav bar, with an underline that grows from the centre on hover. */
export const Inline: Story = {
  render: (args) =>
    withRouter(
      <div className="flex gap-8 bg-surface-app p-6">
        <NavLink {...args} label="Home" to="/" />
        <NavLink {...args} />
        <NavLink {...args} label="Contact Us" to="/contact-us" />
      </div>
    )
};

/** `to="/"` matches the router's current location in this story, so it renders with its active styling (`data-status="active"`). */
export const InlineActive: Story = {
  render: (args) =>
    withRouter(
      <div className="flex gap-8 bg-surface-app p-6">
        <NavLink {...args} label="Home" to="/" />
      </div>
    )
};

/** `block` - a full-width row for the mobile drawer. */
export const Block: Story = {
  args: { variant: 'block' },
  render: (args) =>
    withRouter(
      <div className="flex max-w-xs flex-col gap-1 bg-surface-card p-4">
        <NavLink {...args} label="Home" to="/" />
        <NavLink {...args} />
        <NavLink {...args} label="Contact Us" to="/contact-us" />
      </div>
    )
};
