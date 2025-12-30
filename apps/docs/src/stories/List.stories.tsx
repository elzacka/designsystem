import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from '@designsystem/core';

const meta: Meta<typeof List> = {
  title: 'Komponenter/List',
  component: List,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <List>
      <ListItem>Første element</ListItem>
      <ListItem>Andre element</ListItem>
      <ListItem>Tredje element</ListItem>
    </List>
  ),
};

export const Ordered: Story = {
  render: () => (
    <List variant="ordered">
      <ListItem>Steg 1: Åpne applikasjonen</ListItem>
      <ListItem>Steg 2: Logg inn med brukernavn og passord</ListItem>
      <ListItem>Steg 3: Naviger til innstillinger</ListItem>
      <ListItem>Steg 4: Oppdater profilen din</ListItem>
    </List>
  ),
};

export const WithIcons: Story = {
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
