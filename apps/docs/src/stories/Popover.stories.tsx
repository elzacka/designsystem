import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '@designsystem/core';

const meta: Meta<typeof Popover> = {
  title: 'Komponenter/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: '4rem' }}>
      <Popover>
        <PopoverTrigger>Åpne popover</PopoverTrigger>
        <PopoverContent>
          <PopoverClose />
          <h3 style={{ margin: '0 0 0.5rem', fontSize: '1rem' }}>Tittel</h3>
          <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>
            Dette er innholdet i popover-en. Den kan inneholde hva som helst.
          </p>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '4rem',
        padding: '6rem',
      }}
    >
      <Popover position="top">
        <PopoverTrigger>Topp</PopoverTrigger>
        <PopoverContent>
          <p style={{ margin: 0 }}>Popover på toppen</p>
        </PopoverContent>
      </Popover>
      <Popover position="bottom">
        <PopoverTrigger>Bunn</PopoverTrigger>
        <PopoverContent>
          <p style={{ margin: 0 }}>Popover på bunnen</p>
        </PopoverContent>
      </Popover>
      <Popover position="left">
        <PopoverTrigger>Venstre</PopoverTrigger>
        <PopoverContent>
          <p style={{ margin: 0 }}>Popover til venstre</p>
        </PopoverContent>
      </Popover>
      <Popover position="right">
        <PopoverTrigger>Høyre</PopoverTrigger>
        <PopoverContent>
          <p style={{ margin: 0 }}>Popover til høyre</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
};
