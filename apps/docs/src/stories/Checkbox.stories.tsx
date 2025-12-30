import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, VStack } from '@designsystem/core';

const meta = {
  title: 'Komponenter/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Ledetekst',
    },
    description: {
      control: 'text',
      description: 'Hjelpetekst',
    },
    error: {
      control: 'text',
      description: 'Feilmelding',
    },
    disabled: {
      control: 'boolean',
      description: 'Deaktivert',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate tilstand',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Standard avkrysset',
    },
  },
  args: {
    label: 'Checkbox',
    disabled: false,
    indeterminate: false,
    defaultChecked: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Godta vilkår',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Med beskrivelse',
    description: 'Ekstra informasjon her',
  },
};

export const Checked: Story = {
  args: {
    label: 'Avkrysset',
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate',
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Deaktivert',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Med feil',
    error: 'Du må godta vilkårene',
  },
};

export const AllStates: Story = {
  render: () => (
    <VStack gap={3}>
      <Checkbox label="Standard" />
      <Checkbox label="Med beskrivelse" description="Ekstra informasjon her" />
      <Checkbox label="Avkrysset" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Deaktivert" disabled />
      <Checkbox label="Med feil" error="Du må godta vilkårene" />
    </VStack>
  ),
};
