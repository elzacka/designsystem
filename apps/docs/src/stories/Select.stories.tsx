import type { Meta, StoryObj } from '@storybook/react';
import { Select, VStack } from '@designsystem/core';

const meta: Meta<typeof Select> = {
  title: 'Komponenter/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <VStack gap={4} style={{ maxWidth: '400px' }}>
      <Select label="Velg land" placeholder="Velg et land">
        <option value="no">Norge</option>
        <option value="se">Sverige</option>
        <option value="dk">Danmark</option>
      </Select>
      <Select label="Med feil" error="Vennligst velg et alternativ">
        <option value="">Velg...</option>
      </Select>
    </VStack>
  ),
};
