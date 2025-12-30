import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@designsystem/core';

const meta: Meta<typeof Accordion> = {
  title: 'Komponenter/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
      description: 'Tillat en eller flere åpne seksjoner',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Størrelse på accordion',
    },
  },
  args: {
    type: 'single',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'single',
    size: 'md',
  },
  render: (args) => (
    <Accordion {...args} defaultExpanded={['item-1']}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Hva er inkludert?</AccordionTrigger>
        <AccordionContent>
          <p>
            Abonnementet inkluderer tilgang til alle funksjoner, ubegrenset lagring, og prioritert
            kundesupport.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Hvordan kan jeg avbestille?</AccordionTrigger>
        <AccordionContent>
          <p>
            Du kan avbestille når som helst fra kontoinnstillingene. Abonnementet fortsetter til
            slutten av faktureringsperioden.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Tilbyr dere refusjon?</AccordionTrigger>
        <AccordionContent>
          <p>Ja, vi tilbyr full refusjon innen 30 dager etter kjøp, ingen spørsmål stilt.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" defaultExpanded={['item-1', 'item-2']}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Første seksjon</AccordionTrigger>
        <AccordionContent>
          <p>Innhold i første seksjon. Flere seksjoner kan være åpne samtidig.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Andre seksjon</AccordionTrigger>
        <AccordionContent>
          <p>Innhold i andre seksjon.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Tredje seksjon</AccordionTrigger>
        <AccordionContent>
          <p>Innhold i tredje seksjon.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Small</h3>
        <Accordion size="sm">
          <AccordionItem value="item-1">
            <AccordionTrigger>Liten accordion</AccordionTrigger>
            <AccordionContent>
              <p>Innhold for liten størrelse.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Medium</h3>
        <Accordion size="md">
          <AccordionItem value="item-1">
            <AccordionTrigger>Medium accordion</AccordionTrigger>
            <AccordionContent>
              <p>Innhold for medium størrelse.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Large</h3>
        <Accordion size="lg">
          <AccordionItem value="item-1">
            <AccordionTrigger>Stor accordion</AccordionTrigger>
            <AccordionContent>
              <p>Innhold for stor størrelse.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};
