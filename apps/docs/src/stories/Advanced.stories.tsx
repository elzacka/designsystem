import type { Meta, StoryObj } from '@storybook/react';
import { Search, CopyButton, FileUpload, type FileUploadFile } from '@designsystem/core';
import { useState } from 'react';

const meta: Meta = {
  title: 'Komponenter/Avansert',
};

export default meta;

// Search Stories
export const SearchDefault: StoryObj = {
  name: 'Search - Default',
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <Search placeholder="Søk etter noe..." onSearch={() => {}} />
    </div>
  ),
};

export const SearchSizes: StoryObj = {
  name: 'Search - Sizes',
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

export const SearchWithSuggestions: StoryObj = {
  name: 'Search - With Suggestions',
  render: () => <SearchWithSuggestionsExample />,
};

export const SearchLoading: StoryObj = {
  name: 'Search - Loading',
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <Search defaultValue="Søker..." loading placeholder="Søk..." />
    </div>
  ),
};

// CopyButton Stories
export const CopyButtonDefault: StoryObj = {
  name: 'CopyButton - Default',
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <code style={{ padding: '0.5rem', backgroundColor: '#f1f5f9', borderRadius: '0.25rem' }}>
        npm install @designsystem/core
      </code>
      <CopyButton text="npm install @designsystem/core" />
    </div>
  ),
};

export const CopyButtonVariants: StoryObj = {
  name: 'CopyButton - Variants',
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <CopyButton text="Kopiert tekst" variant="primary" />
      <CopyButton text="Kopiert tekst" variant="secondary" />
      <CopyButton text="Kopiert tekst" variant="ghost" />
    </div>
  ),
};

export const CopyButtonSizes: StoryObj = {
  name: 'CopyButton - Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <CopyButton text="Tekst" size="sm" />
      <CopyButton text="Tekst" size="md" />
      <CopyButton text="Tekst" size="lg" />
    </div>
  ),
};

// FileUpload Stories
export const FileUploadDefault: StoryObj = {
  name: 'FileUpload - Default',
  render: () => <FileUpload onChange={() => {}} accept="image/*" maxSize={5 * 1024 * 1024} />,
};

export const FileUploadMultiple: StoryObj = {
  name: 'FileUpload - Multiple',
  render: () => <FileUpload multiple maxFiles={5} onChange={() => {}} />,
};

const FileUploadWithFilesExample = () => {
  const [files, setFiles] = useState<FileUploadFile[]>([]);

  const handleChange = (newFiles: File[]) => {
    const fileItems: FileUploadFile[] = newFiles.map((file) => ({
      file,
      id: `${file.name}-${Date.now()}`,
    }));
    setFiles((prev) => [...prev, ...fileItems]);
  };

  const handleRemove = (fileToRemove: FileUploadFile) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileToRemove.id));
  };

  return (
    <FileUpload
      multiple
      files={files}
      onChange={handleChange}
      onRemove={handleRemove}
      accept="image/*,.pdf,.doc,.docx"
      maxSize={10 * 1024 * 1024}
    />
  );
};

export const FileUploadWithFiles: StoryObj = {
  name: 'FileUpload - With File List',
  render: () => <FileUploadWithFilesExample />,
};

export const FileUploadWithError: StoryObj = {
  name: 'FileUpload - With Error',
  render: () => <FileUpload error="Filen er for stor. Maks 5 MB." onChange={() => {}} />,
};

export const FileUploadDisabled: StoryObj = {
  name: 'FileUpload - Disabled',
  render: () => <FileUpload disabled onChange={() => {}} />,
};
