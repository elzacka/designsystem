import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload, type FileUploadFile } from '@designsystem/core';
import { useState } from 'react';

const meta: Meta<typeof FileUpload> = {
  title: 'Komponenter/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <FileUpload onChange={() => {}} accept="image/*" maxSize={5 * 1024 * 1024} />,
};

export const Multiple: Story = {
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

export const WithFileList: Story = {
  render: () => <FileUploadWithFilesExample />,
};

export const WithError: Story = {
  render: () => <FileUpload error="Filen er for stor. Maks 5 MB." onChange={() => {}} />,
};

export const Disabled: Story = {
  render: () => <FileUpload disabled onChange={() => {}} />,
};
