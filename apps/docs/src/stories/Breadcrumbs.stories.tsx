import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs, BreadcrumbItem } from '@designsystem/core';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Komponenter/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Hjem</BreadcrumbItem>
      <BreadcrumbItem href="/produkter">Produkter</BreadcrumbItem>
      <BreadcrumbItem href="/produkter/elektronikk">Elektronikk</BreadcrumbItem>
      <BreadcrumbItem current>Telefoner</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const WithHomeIcon: Story = {
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
