import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import Box from './Box';

const meta = {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'text' },
    display: {
      control: 'select',
      options: ['block', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'none']
    },
    direction: { control: 'select', options: ['row', 'row-reverse', 'col', 'col-reverse'] },
    align: { control: 'select', options: ['start', 'center', 'end', 'stretch', 'baseline'] },
    justify: { control: 'select', options: ['start', 'center', 'end', 'between', 'around', 'evenly'] },
    gap: { control: 'select', options: ['none', '1x', '2x', '3x', '4x', '5x'] },
    fullWidth: { control: 'boolean' },
    fullScreen: { control: 'boolean' },
    marginX: { control: 'select', options: ['none', '1x', '2x', '3x', '4x', '5x'] },
    marginY: { control: 'select', options: ['none', '1x', '2x', '3x', '4x', '5x'] },
    paddingX: { control: 'select', options: ['none', '1x', '2x', '3x', '4x', '5x'] },
    paddingY: { control: 'select', options: ['none', '1x', '2x', '3x', '4x', '5x'] },
    border: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'accent', 'disabled', 'success', 'warning', 'danger']
    },
    borderTop: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'accent', 'disabled']
    },
    borderRight: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'accent', 'disabled']
    },
    borderBottom: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'accent', 'disabled']
    },
    borderLeft: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'accent', 'disabled']
    },
    background: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'accent',
        'app',
        'canvas',
        'card',
        'card-raised',
        'sunken',
        'inverse',
        'inverse-card',
        'success',
        'warning',
        'danger'
      ]
    },
    shadow: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl'] },
    borderRadius: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] },
    radiusTopLeft: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] },
    radiusTopRight: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] },
    radiusBottomRight: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] },
    radiusBottomLeft: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] }
  }
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

const Swatch = ({ label }: { label: string }) => (
  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded bg-tertiary text-ink-contrast">
    <span className="font-body text-xs font-medium">{label}</span>
  </div>
);

/** Renders a plain `<div>` by default - same starting point as MUI's `Box`. */
export const Default: Story = {
  render: (args) => (
    <Box {...args} className="rounded border-tertiary-500 border-4 p-4">
      <span className="text-ink-primary">Just a div.</span>
    </Box>
  )
};

/**
 * `as` swaps the rendered tag - any HTML element or component. `id` and
 * `data-testid` always land on that element, whatever it is.
 */
export const PolymorphicTag: Story = {
  render: (args) => (
    <Box {...args} as="section" className="rounded border border-line-primary p-4">
      <span className="text-ink-primary">Rendered as a &lt;section&gt;.</span>
    </Box>
  )
};

/** `display="flex"` plus `direction`/`align`/`justify`/`gap` covers the common flexbox shorthands. */
export const FlexLayout: Story = {
  args: {
    display: 'flex',
    align: 'center',
    justify: 'between',
    gap: '2x'
  },
  render: (args) => (
    <Box {...args} className="rounded border border-line-primary p-4">
      <Swatch label="A" />
      <Swatch label="B" />
      <Swatch label="C" />
    </Box>
  )
};

/** `direction="col"` stacks children vertically instead of the flex default (`row`). */
export const FlexColumn: Story = {
  args: {
    display: 'flex',
    direction: 'col',
    align: 'center',
    gap: '2x'
  },
  render: (args) => (
    <Box {...args} className="rounded border border-line-primary p-4">
      <Swatch label="A" />
      <Swatch label="B" />
      <Swatch label="C" />
    </Box>
  )
};

/** `fullWidth` stretches the box to fill its container (`w-full`). */
export const FullWidth: Story = {
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    display: 'flex',
    justify: 'center',
    fullWidth: true
  },
  render: (args) => (
    <Box {...args} className="border border-dashed border-line-primary p-4">
      <span className="text-ink-primary">Fills its container.</span>
    </Box>
  )
};

/** `fullScreen` combined with `display="flex"` centres content over the full viewport. */
export const FullScreen: Story = {
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    display: 'flex',
    align: 'center',
    justify: 'center',
    fullScreen: true
  },
  render: (args) => (
    <Box {...args}>
      <Swatch label="1:1" />
    </Box>
  )
};

/**
 * `animation` accepts plain CSS animation properties (a `@keyframes` name
 * plus timing), merged straight into the root element's inline `style` -
 * no Motion dependency. For interaction-driven animation, use `AnimatedBox`.
 */
export const GenericCssAnimation: Story = {
  render: (args) => (
    <>
      <style>{`
        @keyframes box-story-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
      <Box
        {...args}
        animation={{
          animationName: 'box-story-pulse',
          animationDuration: '1.2s',
          animationIterationCount: 'infinite'
        }}
        className="flex h-16 w-16 items-center justify-center rounded bg-tertiary"
      >
        <span className="font-body text-xs font-medium text-ink-contrast">Pulsing</span>
      </Box>
    </>
  )
};

/**
 * `border`/`background`/`shadow` pull colour straight from the border/background
 * design tokens ({@link BorderColour}/{@link BackgroundColour} in `common.styles.ts`)
 * - the same tokens `Colour Palette` renders swatches for.
 */
export const TokenColours: Story = {
  args: {
    display: 'flex',
    direction: 'col',
    gap: '2x',
    paddingX: '3x',
    paddingY: '3x',
    border: 'accent',
    background: 'card',
    shadow: 'xl'
  },
  render: (args) => (
    <Box {...args}>
      <span className="text-ink-primary">
        background=&quot;card&quot;, border=&quot;accent&quot;, shadow=&quot;xl&quot;
      </span>
    </Box>
  )
};

/** `marginX`/`marginY`/`paddingX`/`paddingY` use the same `'none' | '1x'..'5x'` scale as `Button`. */
export const Spacing: Story = {
  args: {
    display: 'inline-flex',
    marginX: '3x',
    paddingX: '4x',
    paddingY: '2x',
    background: 'card',
    border: 'primary'
  },
  render: (args) => (
    <Box {...args}>
      <span className="text-ink-primary">Margin + padding applied.</span>
    </Box>
  )
};

/** `borderRadius` rounds all four corners uniformly, using the same scale as `Button`'s `borderRadius`. */
export const CornerRadius: Story = {
  args: {
    display: 'flex',
    paddingX: '3x',
    paddingY: '3x',
    border: 'accent',
    background: 'card',
    borderRadius: 'xl'
  },
  render: (args) => (
    <Box {...args}>
      <span className="text-ink-primary">borderRadius=&quot;xl&quot;</span>
    </Box>
  )
};

/**
 * `radiusTopLeft`/`radiusTopRight`/`radiusBottomRight`/`radiusBottomLeft`
 * override individual corners - combine with `borderRadius` to round three
 * corners one way and pull just one corner square, a common "tab" shape.
 */
export const IndividualCornerRadius: Story = {
  args: {
    display: 'flex',
    paddingX: '3x',
    paddingY: '3x',
    border: 'accent',
    background: 'card',
    borderRadius: 'xl',
    radiusBottomLeft: 'none'
  },
  render: (args) => (
    <Box {...args}>
      <span className="text-ink-primary">borderRadius=&quot;xl&quot;, radiusBottomLeft=&quot;none&quot;</span>
    </Box>
  )
};

/**
 * `borderTop`/`borderRight`/`borderBottom`/`borderLeft` override individual
 * sides - here only the left edge gets a border, a common "active tab"/
 * callout accent.
 */
export const IndividualBorderSides: Story = {
  args: {
    display: 'flex',
    paddingX: '3x',
    paddingY: '2x',
    background: 'card',
    borderLeft: 'accent'
  },
  render: (args) => (
    <Box {...args}>
      <span className="text-ink-primary">borderLeft=&quot;accent&quot;</span>
    </Box>
  )
};
