import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Accordion from './Accordion';
import type { AccordionItemData } from './Accordion.types';

const FAQ_ITEMS: AccordionItemData[] = [
  {
    id: 'first-visit',
    header: 'What should I bring to my first appointment?',
    content:
      "Just yourself, comfortable clothing, and a note of any medications or sensitivities. We'll walk through a short consultation before any treatment begins."
  },
  {
    id: 'cancellations',
    header: 'What is your cancellation policy?',
    content:
      'We ask for at least 24 hours notice for cancellations or reschedules so we can offer the slot to another guest.'
  },
  {
    id: 'aftercare',
    header: 'Is there any aftercare I should follow?',
    content:
      "Aftercare varies by treatment - your therapist will talk you through anything specific before you leave, and it's always included in your appointment confirmation email."
  },
  {
    id: 'gift-cards',
    header: 'Do you offer gift cards?',
    content: 'Yes - gift cards are available in any amount and never expire.',
    disabled: true
  }
];

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'select', options: ['single', 'multiple'] },
    borderRadius: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] }
  },
  args: {
    items: FAQ_ITEMS
  }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

/** `mode="single"` (the default) - opening an item closes whichever other item was open. The fourth item is `disabled`. */
export const Default: Story = {
  render: (args) => <Accordion {...args} />
};

/** `mode="multiple"` - every item opens and closes independently. */
export const Multiple: Story = {
  args: { mode: 'multiple' },
  render: (args) => <Accordion {...args} />
};

/** `defaultOpenIds` starts one or more items open, uncontrolled from there. */
export const DefaultOpen: Story = {
  args: { defaultOpenIds: ['first-visit'] },
  render: (args) => <Accordion {...args} />
};

/** Controlled via `openIds`/`onOpenIdsChange` - the parent owns which item is open, here mirrored in the text below. */
export const Controlled: Story = {
  render: (args) => {
    const ControlledDemo = () => {
      const [openIds, setOpenIds] = useState<string[]>(['first-visit']);

      return (
        <div className="mx-auto flex max-w-xl flex-col gap-3 p-6">
          <p className="font-body text-xs text-ink-muted">Open: {openIds.length ? openIds.join(', ') : 'none'}</p>
          <Accordion {...args} openIds={openIds} onOpenIdsChange={setOpenIds} />
        </div>
      );
    };

    return <ControlledDemo />;
  }
};
