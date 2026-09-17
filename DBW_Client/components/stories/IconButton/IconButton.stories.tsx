import type { Meta, StoryObj } from '@storybook/react-vite';
import { faHeart } from '@awesome.me/kit-c05db0aa61/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from './IconButton';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
    tone: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    borderRadius: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] },
    disabled: { control: 'boolean' }
  },
  args: {
    'aria-label': 'Add to favourites',
    icon: <FontAwesomeIcon icon={faHeart} />
  }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/** `contained` (the default) - hover a swatch to see the darker shade crossfade in. */
export const Contained: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4 p-6">
      <IconButton {...args} tone="primary" />
      <IconButton {...args} tone="secondary" />
      <IconButton {...args} tone="tertiary" />
    </div>
  )
};

/** `outlined` - border + icon in the tone's colour; on hover the background fills with that colour. */
export const Outlined: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4 p-6">
      <IconButton {...args} variant="outlined" tone="primary" />
      <IconButton {...args} variant="outlined" tone="secondary" />
      <IconButton {...args} variant="outlined" tone="tertiary" />
    </div>
  )
};

/** `text` - icon only; on hover a soft tinted circle crossfades in behind it. */
export const Text: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4 p-6">
      <IconButton {...args} variant="text" tone="primary" />
      <IconButton {...args} variant="text" tone="secondary" />
      <IconButton {...args} variant="text" tone="tertiary" />
    </div>
  )
};

/** `disabled` overrides every variant with the same `accent-300` background / `accent-600` icon colour, regardless of `tone`. */
export const Disabled: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4 p-6">
      <IconButton {...args} variant="contained" disabled />
      <IconButton {...args} variant="outlined" disabled />
      <IconButton {...args} variant="text" disabled />
    </div>
  )
};

/** Every `size`, at the default `contained` variant. */
export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4 p-6">
      <IconButton {...args} size="xs" />
      <IconButton {...args} size="sm" />
      <IconButton {...args} size="md" />
      <IconButton {...args} size="lg" />
      <IconButton {...args} size="xl" />
    </div>
  )
};

/** `borderRadius` overrides the default `full` (circular) footprint - here rounded to a square "app icon" shape instead. */
export const SquareRadius: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4 p-6">
      <IconButton {...args} borderRadius="lg" />
    </div>
  )
};
