import type { Meta, StoryObj } from '@storybook/react';
import { Switch, VStack } from '@designsystem/core';

const meta = {
  title: 'Komponenter/Switch',
  component: Switch,
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
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Størrelse',
    },
    labelPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Plassering av ledetekst',
    },
    disabled: {
      control: 'boolean',
      description: 'Deaktivert',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Standard aktivert',
    },
  },
  args: {
    label: 'Switch',
    size: 'md',
    labelPosition: 'right',
    disabled: false,
    defaultChecked: false,
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Aktivert',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Med beskrivelse',
    description: 'Slå på for å motta varsler',
  },
};

export const LabelLeft: Story = {
  args: {
    label: 'Etikett til venstre',
    labelPosition: 'left',
  },
};

export const Small: Story = {
  args: {
    label: 'Liten',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Stor',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Deaktivert',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <VStack gap={3}>
      <Switch label="Standard" />
      <Switch label="Med beskrivelse" description="Slå på for å motta varsler" />
      <Switch label="Etikett til venstre" labelPosition="left" />
      <Switch label="Liten" size="sm" />
      <Switch label="Stor" size="lg" />
      <Switch label="Deaktivert" disabled />
    </VStack>
  ),
};
