import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer } from './Drawer';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    side: { control: 'select', options: ['left', 'right'] }
  },
  args: {
    'aria-label': 'Site navigation',
    open: true,
    onClose: () => {}
  }
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Slides in from the right (default) - clicking the backdrop, pressing Escape, or the built-in close button all call `onClose`. */
export const Right: Story = {
  render: (args) => (
    <div className="min-h-[24rem] bg-surface-app p-6">
      <Drawer {...args}>
        <p className="font-body text-sm text-ink-secondary">Drawer content goes here.</p>
      </Drawer>
    </div>
  )
};

/** `side="left"`. */
export const Left: Story = {
  args: { side: 'left' },
  render: (args) => (
    <div className="min-h-[24rem] bg-surface-app p-6">
      <Drawer {...args}>
        <p className="font-body text-sm text-ink-secondary">Drawer content goes here.</p>
      </Drawer>
    </div>
  )
};

/** A toggle button drives `open`/`onClose`, the way a page's own hamburger button would. */
export const Toggleable: Story = {
  render: () => {
    const ToggleableDemo = () => {
      const [open, setOpen] = useState(false);

      return (
        <div className="min-h-[24rem] bg-surface-app p-6">
          <Button label="Open drawer" onClick={() => setOpen(true)} />
          <Drawer aria-label="Site navigation" open={open} onClose={() => setOpen(false)}>
            <p className="font-body text-sm text-ink-secondary">Drawer content goes here.</p>
          </Drawer>
        </div>
      );
    };

    return <ToggleableDemo />;
  }
};
