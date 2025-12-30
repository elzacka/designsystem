import type { Meta, StoryObj } from '@storybook/react';
import { CopyButton } from '@designsystem/core';

const meta: Meta<typeof CopyButton> = {
  title: 'Komponenter/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <code style={{ padding: '0.5rem', backgroundColor: '#f1f5f9', borderRadius: '0.25rem' }}>
        npm install @designsystem/core
      </code>
      <CopyButton text="npm install @designsystem/core" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <CopyButton text="Kopiert tekst" variant="primary" />
      <CopyButton text="Kopiert tekst" variant="secondary" />
      <CopyButton text="Kopiert tekst" variant="ghost" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <CopyButton text="Tekst" size="sm" />
      <CopyButton text="Tekst" size="md" />
      <CopyButton text="Tekst" size="lg" />
    </div>
  ),
};
