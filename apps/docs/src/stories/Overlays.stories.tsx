import type { Meta, StoryObj } from '@storybook/react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ToastProvider,
  useToast,
  Tooltip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSeparator,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  Button,
} from '@designsystem/core';
import { useState } from 'react';

const meta: Meta = {
  title: 'Components/Overlays',
};

export default meta;

// Modal Stories
const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Åpne modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
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

export const ModalDefault: StoryObj = {
  name: 'Modal - Default',
  render: () => <ModalExample />,
};

const ModalSizesExample = () => {
  const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {(['sm', 'md', 'lg', 'xl', 'full'] as const).map((s) => (
          <Button
            key={s}
            variant={size === s ? 'primary' : 'secondary'}
            onClick={() => {
              setSize(s);
              setIsOpen(true);
            }}
          >
            {s.toUpperCase()}
          </Button>
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={size}>
        <ModalHeader>Modal størrelse: {size}</ModalHeader>
        <ModalBody>
          <p>Dette er en modal med størrelse &quot;{size}&quot;.</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsOpen(false)}>Lukk</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const ModalSizes: StoryObj = {
  name: 'Modal - Sizes',
  render: () => <ModalSizesExample />,
};

// Toast Stories
const ToastExample = () => {
  const { addToast } = useToast();
  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Button
        onClick={() =>
          addToast({ title: 'Suksess!', message: 'Handlingen ble fullført.', variant: 'success' })
        }
      >
        Suksess
      </Button>
      <Button
        onClick={() =>
          addToast({ title: 'Advarsel', message: 'Noe kan være galt.', variant: 'warning' })
        }
      >
        Advarsel
      </Button>
      <Button
        onClick={() => addToast({ title: 'Feil', message: 'Noe gikk galt.', variant: 'error' })}
      >
        Feil
      </Button>
      <Button
        onClick={() =>
          addToast({ title: 'Info', message: 'Her er litt informasjon.', variant: 'info' })
        }
      >
        Info
      </Button>
    </div>
  );
};

export const ToastDefault: StoryObj = {
  name: 'Toast - Default',
  render: () => (
    <ToastProvider>
      <ToastExample />
    </ToastProvider>
  ),
};

const ToastPositionsExample = () => {
  const [position, setPosition] = useState<
    'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'
  >('top-right');
  return (
    <ToastProvider position={position}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {(
            [
              'top-right',
              'top-left',
              'bottom-right',
              'bottom-left',
              'top-center',
              'bottom-center',
            ] as const
          ).map((pos) => (
            <Button
              key={pos}
              variant={position === pos ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setPosition(pos)}
            >
              {pos}
            </Button>
          ))}
        </div>
        <ToastExample />
      </div>
    </ToastProvider>
  );
};

export const ToastPositions: StoryObj = {
  name: 'Toast - Positions',
  render: () => <ToastPositionsExample />,
};

// Tooltip Stories
export const TooltipDefault: StoryObj = {
  name: 'Tooltip - Default',
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', padding: '3rem' }}>
      <Tooltip content="Dette er en tooltip" position="top">
        <Button>Topp</Button>
      </Tooltip>
      <Tooltip content="Dette er en tooltip" position="bottom">
        <Button>Bunn</Button>
      </Tooltip>
      <Tooltip content="Dette er en tooltip" position="left">
        <Button>Venstre</Button>
      </Tooltip>
      <Tooltip content="Dette er en tooltip" position="right">
        <Button>Høyre</Button>
      </Tooltip>
    </div>
  ),
};

// Dropdown Stories
export const DropdownDefault: StoryObj = {
  name: 'Dropdown - Default',
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

export const DropdownAlignments: StoryObj = {
  name: 'Dropdown - Alignments',
  render: () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem' }}>
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

// Popover Stories
export const PopoverDefault: StoryObj = {
  name: 'Popover - Default',
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

export const PopoverPositions: StoryObj = {
  name: 'Popover - Positions',
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
