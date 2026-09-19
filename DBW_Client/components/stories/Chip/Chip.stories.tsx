import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Chip from './Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  argTypes: {
    colour: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'tertiary', 'success', 'warning', 'danger']
    },
    size: { control: 'select', options: ['sm', 'md'] },
    disabled: { control: 'boolean' }
  },
  args: {
    label: 'Chip'
  }
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Every `colour` - `success`/`warning`/`danger` match the status badges already used on `HomeView`. */
export const Colours: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 p-6">
      <Chip colour="neutral" label="Neutral" />
      <Chip colour="primary" label="Primary" />
      <Chip colour="secondary" label="Secondary" />
      <Chip colour="tertiary" label="Tertiary" />
      <Chip colour="success" label="Appointment confirmed" />
      <Chip colour="warning" label="Limited availability" />
      <Chip colour="danger" label="Fully booked" />
    </div>
  )
};

/** `sm`/`md` sizes. */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2 p-6">
      <Chip size="sm" colour="secondary" label="Small" />
      <Chip size="md" colour="secondary" label="Medium" />
    </div>
  )
};

/** `icon` places arbitrary content before the label - a status dot, here. */
export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 p-6">
      <Chip colour="success" label="Online" icon={<span className="h-1.5 w-1.5 rounded-full bg-success-ink" />} />
      <Chip colour="danger" label="Offline" icon={<span className="h-1.5 w-1.5 rounded-full bg-danger-ink" />} />
    </div>
  )
};

/** `onClick` makes the chip itself clickable - press/tap and keyboard-focus feedback match `Button`. */
export const Clickable: Story = {
  render: () => {
    const ClickableDemo = () => {
      const [count, setCount] = useState(0);

      return (
        <div className="flex flex-col items-start gap-3 p-6">
          <p className="font-body text-xs text-ink-muted">Clicked {count} time(s)</p>
          <Chip colour="primary" label="Click me" onClick={() => setCount((current) => current + 1)} />
        </div>
      );
    };

    return <ClickableDemo />;
  }
};

/** `onRemove` renders a trailing dismiss button - a real, separately-clickable `<button>`, never nested inside `onClick`'s own `role="button"`. */
export const Removable: Story = {
  render: () => {
    const RemovableDemo = () => {
      const [tags, setTags] = useState(['Facials', 'Massage', 'Body wraps']);

      return (
        <div className="flex flex-wrap gap-2 p-6">
          {tags.map((tag) => (
            <Chip
              key={tag}
              colour="secondary"
              label={tag}
              onRemove={() => setTags((current) => current.filter((value) => value !== tag))}
            />
          ))}
          {tags.length === 0 && <p className="font-body text-xs text-ink-muted">All tags removed.</p>}
        </div>
      );
    };

    return <RemovableDemo />;
  }
};

/** A clickable chip can also be removable at the same time. */
export const ClickableAndRemovable: Story = {
  args: {
    colour: 'primary',
    label: 'Sensitive skin',
    onClick: () => alert('Chip clicked'),
    onRemove: () => alert('Chip removed')
  }
};

/** `disabled` drops both `onClick` and `onRemove` and dims the chip. */
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 p-6">
      <Chip colour="secondary" label="Disabled" disabled onClick={() => undefined} onRemove={() => undefined} />
    </div>
  )
};
