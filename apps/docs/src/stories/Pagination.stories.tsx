import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '@designsystem/core';
import { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'Komponenter/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const PaginationExample = () => {
  const [page, setPage] = useState(1);
  return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />;
};

export const Default: Story = {
  render: () => <PaginationExample />,
};

export const Compact: Story = {
  render: () => <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />,
};

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = useState(50);
    return <Pagination currentPage={page} totalPages={100} onPageChange={setPage} />;
  },
};
