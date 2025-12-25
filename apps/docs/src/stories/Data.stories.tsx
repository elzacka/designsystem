import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
  TableCaption,
  List,
  ListItem,
  DescriptionList,
  DescriptionTerm,
  DescriptionDetails,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@designsystem/core';
import { useState } from 'react';

const meta: Meta = {
  title: 'Components/Data',
};

export default meta;

// Table Stories
const sampleData = [
  { id: 1, name: 'Ola Nordmann', email: 'ola@example.com', role: 'Admin', status: 'Aktiv' },
  { id: 2, name: 'Kari Hansen', email: 'kari@example.com', role: 'Bruker', status: 'Aktiv' },
  { id: 3, name: 'Per Olsen', email: 'per@example.com', role: 'Bruker', status: 'Inaktiv' },
  { id: 4, name: 'Lisa Berg', email: 'lisa@example.com', role: 'Moderator', status: 'Aktiv' },
];

export const TableDefault: StoryObj = {
  name: 'Table - Default',
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

export const TableStriped: StoryObj = {
  name: 'Table - Striped',
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

export const TableSortable: StoryObj = {
  name: 'Table - Sortable',
  render: () => <SortableTableExample />,
};

// List Stories
export const ListDefault: StoryObj = {
  name: 'List - Default',
  render: () => (
    <List>
      <ListItem>Første element</ListItem>
      <ListItem>Andre element</ListItem>
      <ListItem>Tredje element</ListItem>
    </List>
  ),
};

export const ListOrdered: StoryObj = {
  name: 'List - Ordered',
  render: () => (
    <List variant="ordered">
      <ListItem>Steg 1: Åpne applikasjonen</ListItem>
      <ListItem>Steg 2: Logg inn med brukernavn og passord</ListItem>
      <ListItem>Steg 3: Naviger til innstillinger</ListItem>
      <ListItem>Steg 4: Oppdater profilen din</ListItem>
    </List>
  ),
};

export const ListWithIcons: StoryObj = {
  name: 'List - With Icons',
  render: () => (
    <List variant="none">
      <ListItem
        icon={
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        }
      >
        Fullført oppgave
      </ListItem>
      <ListItem
        icon={
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        }
      >
        Enda en fullført oppgave
      </ListItem>
      <ListItem
        icon={
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        }
      >
        Pågående oppgave
      </ListItem>
    </List>
  ),
};

export const DescriptionListDefault: StoryObj = {
  name: 'DescriptionList - Default',
  render: () => (
    <DescriptionList>
      <DescriptionTerm>Navn</DescriptionTerm>
      <DescriptionDetails>Ola Nordmann</DescriptionDetails>
      <DescriptionTerm>E-post</DescriptionTerm>
      <DescriptionDetails>ola@example.com</DescriptionDetails>
      <DescriptionTerm>Telefon</DescriptionTerm>
      <DescriptionDetails>+47 123 45 678</DescriptionDetails>
    </DescriptionList>
  ),
};

export const DescriptionListHorizontal: StoryObj = {
  name: 'DescriptionList - Horizontal',
  render: () => (
    <DescriptionList horizontal>
      <DescriptionTerm>Ordrenummer</DescriptionTerm>
      <DescriptionDetails>#12345</DescriptionDetails>
      <DescriptionTerm>Dato</DescriptionTerm>
      <DescriptionDetails>25. desember 2025</DescriptionDetails>
      <DescriptionTerm>Status</DescriptionTerm>
      <DescriptionDetails>Sendt</DescriptionDetails>
      <DescriptionTerm>Total</DescriptionTerm>
      <DescriptionDetails>kr 1 234,00</DescriptionDetails>
    </DescriptionList>
  ),
};

// Accordion Stories
export const AccordionDefault: StoryObj = {
  name: 'Accordion - Default',
  render: () => (
    <Accordion defaultExpanded={['item-1']}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Hva er inkludert?</AccordionTrigger>
        <AccordionContent>
          <p>
            Abonnementet inkluderer tilgang til alle funksjoner, ubegrenset lagring, og prioritert
            kundesupport.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Hvordan kan jeg avbestille?</AccordionTrigger>
        <AccordionContent>
          <p>
            Du kan avbestille når som helst fra kontoinnstillingene. Abonnementet fortsetter til
            slutten av faktureringsperioden.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Tilbyr dere refusjon?</AccordionTrigger>
        <AccordionContent>
          <p>Ja, vi tilbyr full refusjon innen 30 dager etter kjøp, ingen spørsmål stilt.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const AccordionMultiple: StoryObj = {
  name: 'Accordion - Multiple',
  render: () => (
    <Accordion type="multiple" defaultExpanded={['item-1', 'item-2']}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Første seksjon</AccordionTrigger>
        <AccordionContent>
          <p>Innhold i første seksjon. Flere seksjoner kan være åpne samtidig.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Andre seksjon</AccordionTrigger>
        <AccordionContent>
          <p>Innhold i andre seksjon.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Tredje seksjon</AccordionTrigger>
        <AccordionContent>
          <p>Innhold i tredje seksjon.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const AccordionSizes: StoryObj = {
  name: 'Accordion - Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Small</h3>
        <Accordion size="sm">
          <AccordionItem value="item-1">
            <AccordionTrigger>Liten accordion</AccordionTrigger>
            <AccordionContent>
              <p>Innhold for liten størrelse.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Medium</h3>
        <Accordion size="md">
          <AccordionItem value="item-1">
            <AccordionTrigger>Medium accordion</AccordionTrigger>
            <AccordionContent>
              <p>Innhold for medium størrelse.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Large</h3>
        <Accordion size="lg">
          <AccordionItem value="item-1">
            <AccordionTrigger>Stor accordion</AccordionTrigger>
            <AccordionContent>
              <p>Innhold for stor størrelse.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};
