import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  argTypes: {
    severity: { control: 'select', options: ['info', 'success', 'warning', 'danger'] }
  },
  args: {
    title: 'Appointment confirmed',
    children: "You're booked in for Saturday at 2:00pm - we'll send a reminder the day before."
  }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

/** `severity="info"` (the default) - no dedicated token exists for it, so it borrows a translucent tint of the `secondary` brand colour. */
export const Default: Story = {};

/** Every `severity`, each with its own default icon. */
export const Severities: Story = {
  render: () => (
    <div className="flex max-w-lg flex-col gap-3 bg-surface-app p-6">
      <Alert severity="info" title="Heads up">
        Your therapist may run a few minutes behind today.
      </Alert>
      <Alert severity="success" title="Appointment confirmed">
        You&apos;re all set for Saturday at 2:00pm.
      </Alert>
      <Alert severity="warning" title="Limited availability">
        Only two slots left this week for this treatment.
      </Alert>
      <Alert severity="danger" title="Booking failed">
        We couldn&apos;t reach the payment provider - please try again.
      </Alert>
    </div>
  )
};

/** `title` is optional - a plain single-line message still works. */
export const MessageOnly: Story = {
  args: { title: undefined, children: 'Bookings open Tuesday - Saturday.' },
  render: (args) => (
    <div className="max-w-lg bg-surface-app p-6">
      <Alert {...args} />
    </div>
  )
};

/** `icon={null}` removes the icon entirely, rather than falling back to the severity's default. */
export const WithoutIcon: Story = {
  args: { icon: null },
  render: (args) => (
    <div className="max-w-lg bg-surface-app p-6">
      <Alert {...args} />
    </div>
  )
};

/** `onClose` renders a dismiss button - the alert removes itself here once clicked. */
export const Dismissible: Story = {
  render: () => {
    const DismissibleDemo = () => {
      const [visible, setVisible] = useState(true);

      if (!visible) {
        return (
          <div className="max-w-lg bg-surface-app p-6">
            <Button size="sm" tone="secondary" label="Show alert again" onClick={() => setVisible(true)} />
          </div>
        );
      }

      return (
        <div className="max-w-lg bg-surface-app p-6">
          <Alert severity="warning" title="Limited availability" onClose={() => setVisible(false)}>
            Only two slots left this week for this treatment.
          </Alert>
        </div>
      );
    };

    return <DismissibleDemo />;
  }
};
