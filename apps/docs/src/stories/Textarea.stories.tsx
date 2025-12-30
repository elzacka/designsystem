import type { Meta, StoryObj } from '@storybook/react';
import { Textarea, VStack } from '@designsystem/core';

const meta = {
  title: 'Komponenter/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Ledetekst',
    },
    placeholder: {
      control: 'text',
      description: 'Plassholder-tekst',
    },
    description: {
      control: 'text',
      description: 'Hjelpetekst',
    },
    error: {
      control: 'text',
      description: 'Feilmelding',
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Skaleringsretning',
    },
    disabled: {
      control: 'boolean',
      description: 'Deaktivert',
    },
    rows: {
      control: 'number',
      description: 'Antall rader',
    },
  },
  args: {
    label: 'Tekstområde',
    placeholder: 'Skriv her...',
    resize: 'vertical',
    disabled: false,
    rows: 4,
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Beskrivelse',
    placeholder: 'Skriv en beskrivelse...',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Kommentar',
    placeholder: 'Skriv en kommentar...',
    description: 'Maksimalt 500 tegn',
  },
};

export const WithError: Story = {
  args: {
    label: 'Påkrevd felt',
    error: 'Minimum 10 tegn',
  },
};

export const NoResize: Story = {
  args: {
    label: 'Ikke skalerbar',
    resize: 'none',
    placeholder: 'Kan ikke skaleres',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Deaktivert',
    disabled: true,
    value: 'Kan ikke endres',
  },
};

export const AllVariants: Story = {
  render: () => (
    <VStack gap={4} style={{ maxWidth: '400px' }}>
      <Textarea label="Standard" placeholder="Skriv en beskrivelse..." />
      <Textarea label="Med feil" error="Minimum 10 tegn" />
      <Textarea label="Ikke skalerbar" resize="none" />
    </VStack>
  ),
};
