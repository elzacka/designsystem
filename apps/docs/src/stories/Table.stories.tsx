import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
  TableCaption,
} from '@designsystem/core';
import { useState } from 'react';

const meta: Meta<typeof Table> = {
  title: 'Komponenter/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { id: 1, name: 'Ola Nordmann', email: 'ola@example.com', role: 'Admin', status: 'Aktiv' },
  { id: 2, name: 'Kari Hansen', email: 'kari@example.com', role: 'Bruker', status: 'Aktiv' },
  { id: 3, name: 'Per Olsen', email: 'per@example.com', role: 'Bruker', status: 'Inaktiv' },
  { id: 4, name: 'Lisa Berg', email: 'lisa@example.com', role: 'Moderator', status: 'Aktiv' },
];

export const Default: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Navn</TableHeader>
          <TableHeader>E-post</TableHeader>
          <TableHeader>Rolle</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table variant="striped">
      <TableCaption>Liste over brukere i systemet</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeader>Navn</TableHeader>
          <TableHeader>E-post</TableHeader>
          <TableHeader>Rolle</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

const SortableTableExample = () => {
  const [sortField, setSortField] = useState<'name' | 'role' | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: 'name' | 'role') => {
    if (sortField === field) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  };

  const sortedData = [...sampleData].sort((a, b) => {
    if (!sortField) return 0;
    const aVal = a[sortField];
    const bVal = b[sortField];
    const cmp = aVal.localeCompare(bVal);
    return sortDir === 'asc' ? cmp : -cmp;
  });

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader
            sortable
            sorted={sortField === 'name' ? sortDir : false}
            onClick={() => handleSort('name')}
          >
            Navn
          </TableHeader>
          <TableHeader>E-post</TableHeader>
          <TableHeader
            sortable
            sorted={sortField === 'role' ? sortDir : false}
            onClick={() => handleSort('role')}
          >
            Rolle
          </TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const Sortable: Story = {
  render: () => <SortableTableExample />,
};
