import type { Meta, StoryObj } from '@storybook/react';
import { SkipLink } from '@designsystem/core';

const meta: Meta<typeof SkipLink> = {
  title: 'Komponenter/SkipLink',
  component: SkipLink,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <SkipLink href="#main-content">Hopp til hovedinnhold</SkipLink>
      <p style={{ marginTop: '2rem' }}>Trykk Tab for å se skiplink-en. Den vises bare ved fokus.</p>
      <main id="main-content" style={{ marginTop: '2rem' }}>
        <h1>Hovedinnhold</h1>
        <p>Dette er hovedinnholdet på siden.</p>
      </main>
    </div>
  ),
};
