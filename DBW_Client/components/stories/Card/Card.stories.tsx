import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import { Button } from '../Button/Button';

const Placeholder = ({ label }: { label: string }) => (
  <div className="flex h-40 w-full items-center justify-center bg-gradient-to-br from-secondary-400 to-tertiary-400">
    <span className="font-body text-xs font-medium tracking-wide text-ink-primary uppercase">{label}</span>
  </div>
);

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  argTypes: {
    borderRadius: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] },
    shadow: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl'] },
    interactive: { control: 'boolean' }
  },
  args: {
    title: 'Signature Facial',
    subtitle: '60 minutes',
    children: 'A calming, results-driven facial tailored to your skin - cleansing, exfoliation, and a hydrating mask.'
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Title/subtitle/body only - no `media`, no `footer`. */
export const Default: Story = {
  render: (args) => (
    <div className="max-w-sm bg-surface-app p-6">
      <Card {...args} />
    </div>
  )
};

/** `media` renders full-bleed above the padded content, ignoring the card's own padding. */
export const WithMedia: Story = {
  args: { media: <Placeholder label="Treatment photo" /> },
  render: (args) => (
    <div className="max-w-sm bg-surface-app p-6">
      <Card {...args} />
    </div>
  )
};

/** `footer` sits in its own row beneath a divider - action buttons are the common case. */
export const WithFooterActions: Story = {
  args: {
    media: <Placeholder label="Treatment photo" />,
    footer: (
      <>
        <Button variant="text" tone="secondary" size="sm" label="Details" />
        <Button variant="contained" tone="tertiary" size="sm" label="Book now" />
      </>
    )
  },
  render: (args) => (
    <div className="max-w-sm bg-surface-app p-6">
      <Card {...args} />
    </div>
  )
};

/**
 * `interactive` makes the whole card clickable - it lifts on hover, presses
 * on tap, and is keyboard-focusable/activatable, all while the footer keeps
 * its own separately-clickable button (a `role="button"` div, not a native
 * `<button>`, so the two never end up nested).
 */
export const Interactive: Story = {
  args: {
    interactive: true,
    media: <Placeholder label="Treatment photo" />,
    onClick: () => alert('Card activated'),
    footer: (
      <Button variant="text" tone="secondary" size="sm" label="Details" onClick={(event) => event.stopPropagation()} />
    )
  },
  render: (args) => (
    <div className="max-w-sm bg-surface-app p-6">
      <Card {...args} />
    </div>
  )
};

/** Three cards side by side, the common "treatment list" layout. */
export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-6 bg-surface-app p-6 sm:grid-cols-3">
      <Card
        media={<Placeholder label="Facial" />}
        title="Signature Facial"
        subtitle="60 minutes"
        footer={<Button size="sm" label="Book now" />}
      >
        A calming, results-driven facial tailored to your skin.
      </Card>
      <Card
        media={<Placeholder label="Massage" />}
        title="Restorative Massage"
        subtitle="90 minutes"
        footer={<Button size="sm" tone="secondary" label="Book now" />}
      >
        Full-body tension relief with warm oils and slow, deliberate strokes.
      </Card>
      <Card
        media={<Placeholder label="Body" />}
        title="Body Renewal Wrap"
        subtitle="75 minutes"
        footer={<Button size="sm" tone="tertiary" label="Book now" />}
      >
        Exfoliation and a mineral-rich wrap to leave skin soft and renewed.
      </Card>
    </div>
  )
};
