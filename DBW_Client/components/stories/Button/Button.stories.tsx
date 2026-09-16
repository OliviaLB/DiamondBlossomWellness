import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
    tone: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    borderRadius: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    label: { control: 'text' }
  },
  args: {
    label: 'Book now'
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** `contained` (the default) - hover a swatch to see the darker shade wipe in from the top. */
export const Contained: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 bg-surface-app p-6">
      <Button variant="contained" tone="primary" label="Primary" />
      <Button variant="contained" tone="secondary" label="Secondary" />
      <Button variant="contained" tone="tertiary" label="Tertiary" />
    </div>
  )
};

/** `outlined` - border + label in the tone's colour; on hover the background fills with that colour. */
export const Outlined: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 bg-surface-app p-6">
      <Button variant="outlined" tone="primary" label="Primary" />
      <Button variant="outlined" tone="secondary" label="Secondary" />
      <Button variant="outlined" tone="tertiary" label="Tertiary" />
    </div>
  )
};

/** `text` - label only; on hover an underline grows out from the centre. */
export const Text: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 bg-surface-app p-6">
      <Button variant="text" tone="primary" label="Primary" />
      <Button variant="text" tone="secondary" label="Secondary" />
      <Button variant="text" tone="tertiary" label="Tertiary" />
    </div>
  )
};

/** `disabled` overrides every variant with the same `accent-300` background / `accent-600` text, regardless of `tone`. */
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 bg-surface-app p-6">
      <Button variant="contained" disabled label="Contained" />
      <Button variant="outlined" disabled label="Outlined" />
      <Button variant="text" disabled label="Text" />
    </div>
  )
};

/** Every `size`, at the default `contained` variant. */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 bg-surface-app p-6">
      <Button size="xs" label="Extra small" />
      <Button size="sm" label="Small" />
      <Button size="md" label="Medium" />
      <Button size="lg" label="Large" />
      <Button size="xl" label="Extra large" />
    </div>
  )
};

/** `startIcon`/`endIcon` place arbitrary content either side of the label. */
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 bg-surface-app p-6">
      <Button label="Confirm" startIcon={<span aria-hidden>✓</span>} />
      <Button variant="outlined" tone="secondary" label="Next" endIcon={<span aria-hidden>&rarr;</span>} />
    </div>
  )
};

/** `fullWidth` stretches the button to fill its container. */
export const FullWidth: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="bg-surface-app p-6">
      <Button fullWidth label="Full width" />
    </div>
  )
};
