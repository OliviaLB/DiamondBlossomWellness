import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
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
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * `Card` is a plain wrapper - just background/border/radius/shadow. Compose
 * it with `CardHeader`/`CardContent`/`CardFooter` as children.
 */
export const Default: Story = {
  render: (args) => (
    <div className="max-w-sm p-6">
      <Card {...args}>
        <CardHeader title="Signature Facial" subtitle="60 minutes" />
        <CardContent>
          A calming, results-driven facial tailored to your skin - cleansing, exfoliation, and a hydrating mask.
        </CardContent>
      </Card>
    </div>
  )
};

/** Any raw content works as a child - here a plain `<img>`-style placeholder, first, renders full-bleed and clips to `borderRadius` since `Card` applies no padding of its own. */
export const WithMedia: Story = {
  render: (args) => (
    <div className="max-w-sm p-6">
      <Card {...args}>
        <Placeholder label="Treatment photo" />
        <CardHeader title="Signature Facial" subtitle="60 minutes" />
        <CardContent>
          A calming, results-driven facial tailored to your skin - cleansing, exfoliation, and a hydrating mask.
        </CardContent>
      </Card>
    </div>
  )
};

/** `CardFooter` sits in its own row beneath a divider - action buttons are the common case. */
export const WithFooterActions: Story = {
  render: (args) => (
    <div className="max-w-sm p-6">
      <Card {...args}>
        <Placeholder label="Treatment photo" />
        <CardHeader title="Signature Facial" subtitle="60 minutes" />
        <CardContent>
          A calming, results-driven facial tailored to your skin - cleansing, exfoliation, and a hydrating mask.
        </CardContent>
        <CardFooter>
          <Button variant="text" tone="secondary" size="sm" label="Details" />
          <Button variant="contained" tone="tertiary" size="sm" label="Book now" />
        </CardFooter>
      </Card>
    </div>
  )
};

/**
 * `interactive` makes the whole card clickable - it lifts on hover, presses
 * on tap, and is keyboard-focusable/activatable, all while `CardFooter`
 * keeps its own separately-clickable button (a `role="button"` div, not a
 * native `<button>`, so the two never end up nested).
 */
export const Interactive: Story = {
  args: {
    interactive: true,
    onClick: () => alert('Card activated')
  },
  render: (args) => (
    <div className="max-w-sm p-6">
      <Card {...args}>
        <Placeholder label="Treatment photo" />
        <CardHeader title="Signature Facial" subtitle="60 minutes" />
        <CardContent>
          A calming, results-driven facial tailored to your skin - cleansing, exfoliation, and a hydrating mask.
        </CardContent>
        <CardFooter>
          <Button
            variant="text"
            tone="secondary"
            size="sm"
            label="Details"
            onClick={(event) => event.stopPropagation()}
          />
        </CardFooter>
      </Card>
    </div>
  )
};

/** Three cards side by side, the common "treatment list" layout. */
export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-3">
      <Card>
        <Placeholder label="Facial" />
        <CardHeader title="Signature Facial" subtitle="60 minutes" />
        <CardContent>A calming, results-driven facial tailored to your skin.</CardContent>
        <CardFooter>
          <Button size="sm" label="Book now" />
        </CardFooter>
      </Card>
      <Card>
        <Placeholder label="Massage" />
        <CardHeader title="Restorative Massage" subtitle="90 minutes" />
        <CardContent>Full-body tension relief with warm oils and slow, deliberate strokes.</CardContent>
        <CardFooter>
          <Button size="sm" tone="secondary" label="Book now" />
        </CardFooter>
      </Card>
      <Card>
        <Placeholder label="Body" />
        <CardHeader title="Body Renewal Wrap" subtitle="75 minutes" />
        <CardContent>Exfoliation and a mineral-rich wrap to leave skin soft and renewed.</CardContent>
        <CardFooter>
          <Button size="sm" tone="tertiary" label="Book now" />
        </CardFooter>
      </Card>
    </div>
  )
};
