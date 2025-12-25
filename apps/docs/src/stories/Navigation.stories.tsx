import type { Meta, StoryObj } from '@storybook/react';
import {
  Tabs,
  TabsList,
  Tab,
  TabPanel,
  Breadcrumbs,
  BreadcrumbItem,
  Pagination,
  SkipLink,
} from '@designsystem/core';
import { useState } from 'react';

const meta: Meta = {
  title: 'Components/Navigation',
};

export default meta;

// Tabs Stories
export const TabsDefault: StoryObj = {
  name: 'Tabs - Default',
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <Tab value="tab1">Oversikt</Tab>
        <Tab value="tab2">Innstillinger</Tab>
        <Tab value="tab3">Varsler</Tab>
      </TabsList>
      <TabPanel value="tab1">
        <p>Innhold for oversikt-fanen.</p>
      </TabPanel>
      <TabPanel value="tab2">
        <p>Innhold for innstillinger-fanen.</p>
      </TabPanel>
      <TabPanel value="tab3">
        <p>Innhold for varsler-fanen.</p>
      </TabPanel>
    </Tabs>
  ),
};

export const TabsWithDisabled: StoryObj = {
  name: 'Tabs - With Disabled',
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <Tab value="tab1">Aktiv</Tab>
        <Tab value="tab2" disabled>
          Deaktivert
        </Tab>
        <Tab value="tab3">Tilgjengelig</Tab>
      </TabsList>
      <TabPanel value="tab1">
        <p>Første fane er valgt.</p>
      </TabPanel>
      <TabPanel value="tab2">
        <p>Denne fanen er deaktivert.</p>
      </TabPanel>
      <TabPanel value="tab3">
        <p>Tredje fane.</p>
      </TabPanel>
    </Tabs>
  ),
};

// Breadcrumbs Stories
export const BreadcrumbsDefault: StoryObj = {
  name: 'Breadcrumbs - Default',
  render: () => (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Hjem</BreadcrumbItem>
      <BreadcrumbItem href="/produkter">Produkter</BreadcrumbItem>
      <BreadcrumbItem href="/produkter/elektronikk">Elektronikk</BreadcrumbItem>
      <BreadcrumbItem current>Telefoner</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const BreadcrumbsWithIcons: StoryObj = {
  name: 'Breadcrumbs - With Home Icon',
  render: () => (
    <Breadcrumbs>
      <BreadcrumbItem href="/">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </BreadcrumbItem>
      <BreadcrumbItem href="/dokumenter">Dokumenter</BreadcrumbItem>
      <BreadcrumbItem current>Rapport 2024</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

// Pagination Stories
const PaginationExample = () => {
  const [page, setPage] = useState(1);
  return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />;
};

export const PaginationDefault: StoryObj = {
  name: 'Pagination - Default',
  render: () => <PaginationExample />,
};

export const PaginationCompact: StoryObj = {
  name: 'Pagination - Compact',
  render: () => <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />,
};

export const PaginationManyPages: StoryObj = {
  name: 'Pagination - Many Pages',
  render: () => {
    const [page, setPage] = useState(50);
    return <Pagination currentPage={page} totalPages={100} onPageChange={setPage} />;
  },
};

// SkipLink Stories
export const SkipLinkDefault: StoryObj = {
  name: 'SkipLink - Default',
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
