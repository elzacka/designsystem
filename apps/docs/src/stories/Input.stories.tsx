import type { Meta, StoryObj } from '@storybook/react';
import { Input, VStack } from '@designsystem/core';

const meta = {
  title: 'Komponenter/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Ledetekst for feltet',
    },
    placeholder: {
      control: 'text',
      description: 'Plassholder-tekst',
    },
    description: {
      control: 'text',
      description: 'Hjelpetekst under feltet',
    },
    error: {
      control: 'text',
      description: 'Feilmelding',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Størrelse på input',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Input-type',
    },
    disabled: {
      control: 'boolean',
      description: 'Deaktiver feltet',
    },
    required: {
      control: 'boolean',
      description: 'Påkrevd felt',
    },
  },
  args: {
    label: 'Ledetekst',
    placeholder: 'Skriv her...',
    size: 'md',
    type: 'text',
    disabled: false,
    required: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Navn',
    placeholder: 'Skriv inn navn',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'E-post',
    type: 'email',
    placeholder: 'navn@eksempel.no',
    description: 'Vi deler aldri e-posten din',
  },
};

export const WithError: Story = {
  args: {
    label: 'Påkrevd felt',
    error: 'Dette feltet er påkrevd',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Deaktivert',
    disabled: true,
    value: 'Kan ikke endres',
  },
};

export const Small: Story = {
  args: {
    label: 'Liten',
    size: 'sm',
    placeholder: 'Liten input',
  },
};

export const Large: Story = {
  args: {
    label: 'Stor',
    size: 'lg',
    placeholder: 'Stor input',
  },
};

export const AllSizes: Story = {
  render: () => (
    <VStack gap={4} style={{ maxWidth: '400px' }}>
      <Input label="Small" size="sm" placeholder="Liten input" />
      <Input label="Medium" size="md" placeholder="Medium input" />
      <Input label="Large" size="lg" placeholder="Stor input" />
    </VStack>
  ),
};
