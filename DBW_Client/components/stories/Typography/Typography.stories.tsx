import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import Typography from './Typography';
import { Box } from '../Box';

const meta = {
  title: 'Foundations/Typography',
  component: Typography,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'label', 'button']
    },
    colour: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'contrast',
        'muted',
        'link',
        'link-hover',
        'success',
        'warning',
        'danger',
        'success-dark',
        'warning-dark',
        'danger-dark'
      ]
    },
    textAlign: { control: 'select', options: ['left', 'center', 'right', 'justify'] },
    noWrap: { control: 'boolean' },
    gutterBottom: { control: 'boolean' }
  }
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

/** `body1` is the default variant - a plain `<p>`. */
export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    className: 'bg-surface-app p-4'
  }
};

/**
 * Every variant, each rendering its own default element (`h1`-`h6` →
 * `<h1>`-`<h6>`, `subtitle*`/`body*`/`label`/`button` → `<p>`/`<span>`).
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-2 bg-surface-app">
      <Typography variant="h1">h1. The quick brown fox</Typography>
      <Typography variant="h2">h2. The quick brown fox</Typography>
      <Typography variant="h3">h3. The quick brown fox</Typography>
      <Typography variant="h4">h4. The quick brown fox</Typography>
      <Typography variant="h5">h5. The quick brown fox</Typography>
      <Typography variant="h6">h6. The quick brown fox</Typography>
      <Typography variant="subtitle1">subtitle1. The quick brown fox jumps over the lazy dog.</Typography>
      <Typography variant="subtitle2">subtitle2. The quick brown fox jumps over the lazy dog.</Typography>
      <Typography variant="body1">body1. The quick brown fox jumps over the lazy dog.</Typography>
      <Typography variant="body2">body2. The quick brown fox jumps over the lazy dog.</Typography>
      <Typography variant="label">label. The quick brown fox jumps over the lazy dog.</Typography>
      <Typography variant="button">button. THE QUICK BROWN FOX</Typography>
    </div>
  )
};

/**
 * `label`/`button` are meant to sit *inside* another interactive component
 * rather than stand alone (a `Switch`'s own label, a `Button`'s own label
 * text, etc). `button` in particular sets no font-size - it inherits
 * whatever size its host already controls, here shown at three different
 * ambient sizes, standing in for a small/medium/large button.
 */
export const LabelAndButtonInContext: Story = {
  render: () => (
    <div className="flex flex-col gap-4 bg-surface-app p-4">
      <label className="inline-flex items-center gap-2">
        <input type="checkbox" />
        <Typography as="span" variant="label">
          Email me about updates
        </Typography>
      </label>
      <div className="flex items-center gap-4">
        <span className="text-sm">
          <Typography as="span" variant="button">
            Small button text
          </Typography>
        </span>
        <span className="text-base">
          <Typography as="span" variant="button">
            Medium button text
          </Typography>
        </span>
        <span className="text-lg">
          <Typography as="span" variant="button">
            Large button text
          </Typography>
        </span>
      </div>
    </div>
  )
};

/**
 * Every named colour, on the page's own background - `primary` (the
 * default) and `secondary` are neutral ink shades, `muted` is for captions/
 * metadata, `link`/`link-hover` match an anchor's two states, and
 * `success`/`warning`/`danger` are status tones (each with an explicit
 * `-dark` variant - not an automatic dark-mode switch, see `themeColours.css`).
 */
export const ColourVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-2 bg-surface-app p-4">
      <Typography colour="primary">primary - default body text</Typography>
      <Typography colour="secondary">secondary - subdued/supporting text</Typography>
      <Typography colour="muted">muted - captions, metadata</Typography>
      <Typography colour="link">link - matches an unvisited link</Typography>
      <Typography colour="link-hover">link-hover - matches a hovered link</Typography>
      <Typography colour="success-dark">success</Typography>
      <Typography colour="warning-dark">warning</Typography>
      <Typography colour="danger-dark">danger</Typography>
    </div>
  )
};

/**
 * `colour` picked against the background it's actually meant for. Every
 * colour but `contrast` is tuned to read against the app's own dark
 * `--surface-app` background (see `themeColours.css`) - `contrast` is the
 * one colour tuned for a *light* surface instead, so it's paired here with
 * a light `Box background` (`inverse`/`inverse-card`) rather than the
 * page's own background.
 */
export const ColourOnDifferentBackgrounds: Story = {
  render: () => (
    <div className="flex flex-col gap-3 bg-surface-app p-4">
      <Box border="default" borderRadius="md" paddingX="3x" paddingY="2x">
        <Typography colour="primary">primary on the page&apos;s own background</Typography>
      </Box>
      <Box background="card" borderRadius="md" paddingX="3x" paddingY="2x">
        <Typography colour="secondary">secondary on a card background</Typography>
      </Box>
      <Box background="inverse-card" borderRadius="md" paddingX="3x" paddingY="2x">
        <Typography colour="contrast">contrast on a light inverse-card background</Typography>
      </Box>
    </div>
  )
};

/**
 * `h1` is exactly 4× the 1rem base size at the `lg:` breakpoint and 2.56×
 * on small screens, bold at both - resize the preview past 1024px wide to
 * see it change.
 */
export const ResponsiveHeading: Story = {
  args: {
    variant: 'h1',
    children: 'Responsive & bold',
    className: 'bg-surface-app p-4'
  }
};

/** `textAlign` sets horizontal alignment. */
export const TextAlignment: Story = {
  render: () => (
    <div className="flex flex-col gap-2 bg-surface-app p-4">
      <Typography textAlign="left">Left aligned</Typography>
      <Typography textAlign="center">Center aligned</Typography>
      <Typography textAlign="right">Right aligned</Typography>
      <Typography textAlign="justify">
        Justify aligned - a long enough line to actually show the effect of justified text wrapping across more than one
        line in this narrow container.
      </Typography>
    </div>
  )
};

/** `noWrap` truncates overflowing text to a single line with an ellipsis instead of wrapping. */
export const NoWrap: Story = {
  args: {
    noWrap: true,
    children: 'This is a very long line of text that will be truncated with an ellipsis instead of wrapping.',
    className: 'max-w-xs border border-dashed border-line bg-surface-app p-4'
  }
};

/** `gutterBottom` adds space below - handy for a heading immediately followed by body copy. */
export const GutterBottom: Story = {
  render: () => (
    <div className="border border-dashed border-line p-2 bg-surface-app">
      <Typography variant="h4" gutterBottom>
        Section title
      </Typography>
      <Typography variant="body1">Body copy directly beneath it, spaced apart by `gutterBottom`.</Typography>
    </div>
  )
};

/**
 * Because `Typography` renders through `Box`, every `Box` prop - layout,
 * spacing, token colour, and the generic `animation` style - still works
 * here. This pulses `opacity` via a plain CSS `@keyframes` animation, no
 * Motion dependency.
 */
export const Animated: Story = {
  render: (args) => (
    <div className="bg-surface-app p-4">
      <style>{`
        @keyframes typography-story-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
      <Typography
        {...args}
        variant="h3"
        animation={{
          animationName: 'typography-story-pulse',
          animationDuration: '1.2s',
          animationIterationCount: 'infinite'
        }}
      >
        Pulsing heading
      </Typography>
    </div>
  )
};
