import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sheet, Button } from '@designsystem/core';

const meta = {
  title: 'Komponenter/Overlays/Sheet',
  component: Sheet,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['bottom', 'right', 'left'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
    },
    dismissible: {
      control: 'boolean',
    },
    modal: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Sheet>;

export default meta;

const SheetDemo = ({
  position = 'bottom',
  size = 'md',
  dismissible = true,
  modal = true,
}: {
  position?: 'bottom' | 'right' | 'left';
  size?: 'sm' | 'md' | 'lg' | 'full';
  dismissible?: boolean;
  modal?: boolean;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <Button onClick={() => setOpen(true)}>Open {position} sheet</Button>
      <Sheet
        open={open}
        onOpenChange={setOpen}
        position={position}
        size={size}
        dismissible={dismissible}
        modal={modal}
      >
        <h2 style={{ margin: '0 0 1rem', fontSize: '1.25rem', fontWeight: 600 }}>Sheet Title</h2>
        <p style={{ margin: '0 0 1rem', color: 'var(--color-gray-600)' }}>
          This is a {position} sheet. You can drag to dismiss it or click the backdrop.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Confirm
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </div>
      </Sheet>
    </div>
  );
};

export const Bottom: StoryObj = {
  render: () => <SheetDemo position="bottom" />,
};

export const Right: StoryObj = {
  render: () => <SheetDemo position="right" />,
};

export const Left: StoryObj = {
  render: () => <SheetDemo position="left" />,
};

export const Small: StoryObj = {
  render: () => <SheetDemo size="sm" />,
};

export const Large: StoryObj = {
  render: () => <SheetDemo size="lg" />,
};

export const Full: StoryObj = {
  render: () => <SheetDemo size="full" />,
};

export const NonDismissible: StoryObj = {
  render: () => <SheetDemo dismissible={false} />,
};

export const MobileNavigation: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    const menuItems = ['Hjem', 'Produkter', 'Tjenester', 'Om oss', 'Kontakt'];

    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setOpen(true)}>Open Navigation</Button>
        <Sheet open={open} onOpenChange={setOpen} position="left" size="sm">
          <nav>
            <h2 style={{ margin: '0 0 1.5rem', fontSize: '1.25rem', fontWeight: 600 }}>Meny</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {menuItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '0.75rem 0',
                      border: 'none',
                      background: 'none',
                      textAlign: 'left',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      color: 'var(--color-gray-700)',
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </Sheet>
      </div>
    );
  },
};

export const ActionSheet: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    const actions = [
      { label: 'Del', icon: '↗' },
      { label: 'Kopier lenke', icon: '🔗' },
      { label: 'Lagre', icon: '💾' },
      { label: 'Slett', icon: '🗑', destructive: true },
    ];

    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setOpen(true)}>Show Actions</Button>
        <Sheet open={open} onOpenChange={setOpen} position="bottom" size="sm">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {actions.map((action) => (
              <button
                key={action.label}
                onClick={() => setOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  width: '100%',
                  padding: '0.875rem 0.5rem',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  background: 'none',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  color: action.destructive ? 'var(--color-error)' : 'var(--color-gray-900)',
                }}
              >
                <span>{action.icon}</span>
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </Sheet>
      </div>
    );
  },
};
