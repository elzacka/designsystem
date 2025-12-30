import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@designsystem/core';
import { useState } from 'react';

const meta = {
  title: 'Komponenter/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Størrelse på modal',
    },
    isOpen: {
      control: 'boolean',
      description: 'Om modal er åpen',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj;

const ModalDemo = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' | 'xl' | 'full' }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Åpne modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={size}>
        <ModalHeader>Bekreft handling</ModalHeader>
        <ModalBody>
          <p>Er du sikker på at du vil fortsette med denne handlingen?</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Avbryt
          </Button>
          <Button onClick={() => setIsOpen(false)}>Bekreft</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => <ModalDemo size="md" />,
};

export const Small: Story = {
  render: () => <ModalDemo size="sm" />,
};

export const Large: Story = {
  render: () => <ModalDemo size="lg" />,
};

export const ExtraLarge: Story = {
  render: () => <ModalDemo size="xl" />,
};

export const Full: Story = {
  render: () => <ModalDemo size="full" />,
};
