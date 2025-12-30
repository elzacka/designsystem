import type { Meta, StoryObj } from '@storybook/react';
import { Radio, VStack } from '@designsystem/core';

const meta = {
  title: 'Komponenter/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Ledetekst',
    },
    name: {
      control: 'text',
      description: 'Gruppenavn',
    },
    value: {
      control: 'text',
      description: 'Verdi',
    },
    disabled: {
      control: 'boolean',
      description: 'Deaktivert',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Standard valgt',
    },
  },
  args: {
    label: 'Alternativ',
    name: 'demo',
    value: '1',
    disabled: false,
    defaultChecked: false,
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Alternativ 1',
    name: 'default',
    value: '1',
  },
};

export const Checked: Story = {
  args: {
    label: 'Valgt alternativ',
    name: 'checked',
    value: '1',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Deaktivert alternativ',
    name: 'disabled',
    value: '1',
    disabled: true,
  },
};

export const RadioGroup: Story = {
  render: () => (
    <VStack gap={3}>
      <Radio name="option" label="Alternativ 1" value="1" />
      <Radio name="option" label="Alternativ 2" value="2" />
      <Radio name="option" label="Alternativ 3" value="3" disabled />
    </VStack>
  ),
};
