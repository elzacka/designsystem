import type { Meta, StoryObj } from '@storybook/react';
import { Alert, VStack } from '@designsystem/core';

const meta = {
  title: 'Komponenter/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Visuell variant',
    },
    title: {
      control: 'text',
      description: 'Tittel for varselet',
    },
    children: {
      control: 'text',
      description: 'Innhold i varselet',
    },
    dismissible: {
      control: 'boolean',
      description: 'Om varselet kan lukkes',
    },
  },
  args: {
    variant: 'info',
    title: 'Informasjon',
    children: 'Dette er en informasjonsmelding.',
    dismissible: false,
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'info',
    title: 'Informasjon',
    children: 'Dette er en informasjonsmelding.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Suksess',
    children: 'Handlingen ble fullført.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Advarsel',
    children: 'Vær oppmerksom på dette.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Feil',
    children: 'Noe gikk galt.',
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'info',
    children: 'Denne kan lukkes.',
    dismissible: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <VStack gap={4}>
      <Alert variant="info" title="Informasjon">
        Dette er en informasjonsmelding.
      </Alert>
      <Alert variant="success" title="Suksess">
        Handlingen ble fullført.
      </Alert>
      <Alert variant="warning" title="Advarsel">
        Vær oppmerksom på dette.
      </Alert>
      <Alert variant="error" title="Feil">
        Noe gikk galt.
      </Alert>
    </VStack>
  ),
};
