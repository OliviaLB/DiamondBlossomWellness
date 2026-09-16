import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { faEnvelope, faLock, faMagnifyingGlass } from '@awesome.me/kit-c05db0aa61/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    type: { control: 'select', options: ['text', 'email', 'password', 'search', 'tel', 'url', 'number'] },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    required: { control: 'boolean' },
    fullWidth: { control: 'boolean' }
  },
  args: {
    label: 'Full name',
    placeholder: 'Jane Doe'
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/** `label` sits above the field; the field itself uses `surface-sunken`, the same "recessed" token used elsewhere for wells/insets. */
export const Default: Story = {
  render: (args) => (
    <div className="max-w-sm bg-surface-app p-6">
      <Input {...args} />
    </div>
  )
};

/** `required` shows a `*` next to the label. */
export const Required: Story = {
  args: { required: true },
  render: (args) => (
    <div className="max-w-sm bg-surface-app p-6">
      <Input {...args} />
    </div>
  )
};

/** `helperText` renders beneath the field in a muted tone. */
export const WithHelperText: Story = {
  args: { helperText: 'As it should appear on your booking confirmation.' },
  render: (args) => (
    <div className="max-w-sm bg-surface-app p-6">
      <Input {...args} />
    </div>
  )
};

/** `errorMessage` flips the field's border to `danger` and replaces `helperText` beneath it. */
export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    defaultValue: 'not-an-email',
    helperText: "We'll send your confirmation here.",
    errorMessage: 'Enter a valid email address.'
  },
  render: (args) => (
    <div className="max-w-sm bg-surface-app p-6">
      <Input {...args} />
    </div>
  )
};

/** `startIcon`/`endIcon` place arbitrary content inside the field. */
export const WithIcons: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-4 bg-surface-app p-6">
      <Input
        label="Search treatments"
        placeholder="Facial, massage..."
        startIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
      />
      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        startIcon={<FontAwesomeIcon icon={faEnvelope} />}
      />
      <Input label="Password" type="password" placeholder="••••••••" endIcon={<FontAwesomeIcon icon={faLock} />} />
    </div>
  )
};

/** Every `size`. */
export const Sizes: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-4 bg-surface-app p-6">
      <Input size="sm" label="Small" placeholder="Small" />
      <Input size="md" label="Medium" placeholder="Medium" />
      <Input size="lg" label="Large" placeholder="Large" />
    </div>
  )
};

/** `disabled`/`readOnly` side by side - `disabled` dims and blocks focus entirely, `readOnly` stays focusable/selectable but can't be edited. */
export const DisabledAndReadOnly: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-4 bg-surface-app p-6">
      <Input label="Disabled" defaultValue="Can't touch this" disabled />
      <Input label="Read only" defaultValue="Locked in" readOnly />
    </div>
  )
};

/** Controlled via `value`/`onChange`. */
export const Controlled: Story = {
  render: () => {
    const ControlledDemo = () => {
      const [value, setValue] = useState('');

      return (
        <div className="max-w-sm bg-surface-app p-6">
          <Input
            label="Notes"
            placeholder="Anything we should know?"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            helperText={`${value.length} characters`}
          />
        </div>
      );
    };

    return <ControlledDemo />;
  }
};

/** `fullWidth` stretches the field to fill its container. */
export const FullWidth: Story = {
  args: { fullWidth: true },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div className="bg-surface-app p-6">
      <Input {...args} />
    </div>
  )
};
