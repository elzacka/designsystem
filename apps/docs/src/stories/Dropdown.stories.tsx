import type { Meta, StoryObj } from '@storybook/react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSeparator,
} from '@designsystem/core';

const meta: Meta<typeof Dropdown> = {
  title: 'Komponenter/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>Åpne meny</DropdownTrigger>
      <DropdownMenu>
        <DropdownItem>Rediger</DropdownItem>
        <DropdownItem>Dupliser</DropdownItem>
        <DropdownSeparator />
        <DropdownItem>Arkiver</DropdownItem>
        <DropdownItem destructive>Slett</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const Alignments: Story = {
  render: () => (
    <div
      style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem', width: '100%' }}
    >
      <Dropdown align="start">
        <DropdownTrigger>Start</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Valg 1</DropdownItem>
          <DropdownItem>Valg 2</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown align="center">
        <DropdownTrigger>Senter</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Valg 1</DropdownItem>
          <DropdownItem>Valg 2</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown align="end">
        <DropdownTrigger>Slutt</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Valg 1</DropdownItem>
          <DropdownItem>Valg 2</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  ),
};
