import type { Meta, StoryObj } from '@storybook/react';
import { Search } from '@designsystem/core';
import { useState } from 'react';

const meta: Meta<typeof Search> = {
  title: 'Komponenter/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <Search placeholder="Søk etter noe..." onSearch={() => {}} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <Search size="sm" placeholder="Liten søkeboks" />
      <Search size="md" placeholder="Medium søkeboks" />
      <Search size="lg" placeholder="Stor søkeboks" />
    </div>
  ),
};

const SearchWithSuggestionsExample = () => {
  const [value, setValue] = useState('');
  const allSuggestions = [
    'React',
    'React Native',
    'Redux',
    'Remix',
    'Next.js',
    'Node.js',
    'TypeScript',
    'JavaScript',
  ];

  const filteredSuggestions = value
    ? allSuggestions.filter((s) => s.toLowerCase().includes(value.toLowerCase()))
    : [];

  return (
    <div style={{ maxWidth: '400px' }}>
      <Search
        value={value}
        onChange={setValue}
        suggestions={filteredSuggestions}
        onSuggestionSelect={(suggestion: string) => {
          setValue(suggestion);
        }}
        placeholder="Søk etter rammeverk..."
      />
    </div>
  );
};

export const WithSuggestions: Story = {
  render: () => <SearchWithSuggestionsExample />,
};

export const Loading: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <Search defaultValue="Søker..." loading placeholder="Søk..." />
    </div>
  ),
};
