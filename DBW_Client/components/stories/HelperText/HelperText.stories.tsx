import type { Meta, StoryObj } from '@storybook/react-vite';
import { HelperText } from './HelperText';

const meta = {
  title: 'Components/HelperText',
  component: HelperText,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
} satisfies Meta<typeof HelperText>;

export default meta;
type Story = StoryObj<typeof meta>;

/** `helperText` alone, in a muted tone. */
export const Helper: Story = {
  args: { helperText: "We'll send your confirmation here." },
  render: (args) => (
    <div className="max-w-sm bg-surface-app p-6">
      <HelperText {...args} />
    </div>
  )
};

/** `errorMessage` switches to the `danger` tone. */
export const ErrorState: Story = {
  args: { errorMessage: 'Enter a valid email address.' },
  render: (args) => (
    <div className="max-w-sm bg-surface-app p-6">
      <HelperText {...args} />
    </div>
  )
};

/** With both set, `errorMessage` wins - `helperText` is passed through unconditionally, exactly as `Input` does it. */
export const ErrorWinsOverHelper: Story = {
  args: {
    helperText: "We'll send your confirmation here.",
    errorMessage: 'Enter a valid email address.'
  },
  render: (args) => (
    <div className="max-w-sm bg-surface-app p-6">
      <HelperText {...args} />
    </div>
  )
};

/** With neither set, `HelperText` renders nothing at all - no empty spacing left behind. */
export const Empty: Story = {
  render: () => (
    <div className="max-w-sm border border-dashed border-line bg-surface-app p-6">
      <HelperText />
    </div>
  )
};
