import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast, Button } from '@designsystem/core';
import { useState } from 'react';

const meta: Meta = {
  title: 'Komponenter/Toast',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

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

export const Default: Story = {
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

export const Positions: Story = {
  render: () => <ToastPositionsExample />,
};
