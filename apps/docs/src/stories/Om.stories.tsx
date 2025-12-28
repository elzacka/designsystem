import type { Meta, StoryObj } from '@storybook/react';

const OmDesignsystemet = () => {
  return <div>{/* Innhold legges til senere */}</div>;
};

const meta = {
  title: 'Om designsystemet',
  component: OmDesignsystemet,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof OmDesignsystemet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
