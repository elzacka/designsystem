import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { Button, Alert, Badge, Input, Switch, VStack, HStack } from '@designsystem/core';

const meta = {
  title: 'Theme Editor',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

interface ThemeColors {
  primary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

interface ThemeConfig {
  colors: ThemeColors;
  fontFamily: string;
  borderRadius: string;
}

const defaultTheme: ThemeConfig = {
  colors: {
    primary: '#3b82f6',
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#0ea5e9',
  },
  fontFamily: 'system-ui, -apple-system, sans-serif',
  borderRadius: '0.375rem',
};

const fontOptions = [
  { value: 'system-ui, -apple-system, sans-serif', label: 'System (Standard)' },
  { value: '"Inter", sans-serif', label: 'Inter' },
  { value: '"Roboto", sans-serif', label: 'Roboto' },
  { value: '"Open Sans", sans-serif', label: 'Open Sans' },
  { value: '"Source Sans Pro", sans-serif', label: 'Source Sans Pro' },
  { value: 'Georgia, serif', label: 'Georgia (Serif)' },
];

const radiusOptions = [
  { value: '0', label: 'Ingen (0)' },
  { value: '0.125rem', label: 'Liten (2px)' },
  { value: '0.375rem', label: 'Medium (6px)' },
  { value: '0.5rem', label: 'Stor (8px)' },
  { value: '1rem', label: 'Ekstra stor (16px)' },
  { value: '9999px', label: 'Full (Rund)' },
];

const ColorInput = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
    <input
      type="color"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: '48px',
        height: '48px',
        border: '2px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        padding: '2px',
      }}
    />
    <div style={{ flex: 1 }}>
      <div style={{ fontWeight: 500, marginBottom: '2px' }}>{label}</div>
      <code
        style={{
          fontSize: '0.75rem',
          color: 'var(--color-muted-foreground)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        {value}
      </code>
    </div>
  </div>
);

const ThemeEditorComponent = () => {
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    // Apply colors
    root.style.setProperty('--color-primary-500', theme.colors.primary);
    root.style.setProperty('--color-accent', theme.colors.primary);
    root.style.setProperty('--color-ring', theme.colors.primary);
    root.style.setProperty('--color-success-500', theme.colors.success);
    root.style.setProperty('--color-warning-500', theme.colors.warning);
    root.style.setProperty('--color-error-500', theme.colors.error);
    root.style.setProperty('--color-info-500', theme.colors.info);

    // Apply font
    root.style.setProperty('--font-sans', theme.fontFamily);

    // Apply border radius
    root.style.setProperty('--radius-md', theme.borderRadius);

    return () => {
      root.style.removeProperty('--color-primary-500');
      root.style.removeProperty('--color-accent');
      root.style.removeProperty('--color-ring');
      root.style.removeProperty('--color-success-500');
      root.style.removeProperty('--color-warning-500');
      root.style.removeProperty('--color-error-500');
      root.style.removeProperty('--color-info-500');
      root.style.removeProperty('--font-sans');
      root.style.removeProperty('--radius-md');
    };
  }, [theme]);

  const updateColor = (key: keyof ThemeColors, value: string) => {
    setTheme((prev) => ({
      ...prev,
      colors: { ...prev.colors, [key]: value },
    }));
  };

  const generateCSS = () => {
    return `:root {
  /* Primary */
  --color-primary-500: ${theme.colors.primary};
  --color-accent: ${theme.colors.primary};
  --color-ring: ${theme.colors.primary};

  /* Success */
  --color-success-500: ${theme.colors.success};

  /* Warning */
  --color-warning-500: ${theme.colors.warning};

  /* Error */
  --color-error-500: ${theme.colors.error};

  /* Info */
  --color-info-500: ${theme.colors.info};

  /* Typography */
  --font-sans: ${theme.fontFamily};

  /* Border Radius */
  --radius-md: ${theme.borderRadius};
}`;
  };

  const copyCSS = async () => {
    await navigator.clipboard.writeText(generateCSS());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetTheme = () => {
    setTheme(defaultTheme);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
      {/* Left: Controls */}
      <div>
        <h2 style={{ margin: '0 0 1.5rem', fontSize: '1.5rem', fontWeight: 600 }}>Theme Editor</h2>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 1rem', fontSize: '1rem', fontWeight: 600 }}>Farger</h3>
          <VStack gap={4}>
            <ColorInput
              label="Primærfarge"
              value={theme.colors.primary}
              onChange={(v) => updateColor('primary', v)}
            />
            <ColorInput
              label="Suksess"
              value={theme.colors.success}
              onChange={(v) => updateColor('success', v)}
            />
            <ColorInput
              label="Advarsel"
              value={theme.colors.warning}
              onChange={(v) => updateColor('warning', v)}
            />
            <ColorInput
              label="Feil"
              value={theme.colors.error}
              onChange={(v) => updateColor('error', v)}
            />
            <ColorInput
              label="Info"
              value={theme.colors.info}
              onChange={(v) => updateColor('info', v)}
            />
          </VStack>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 1rem', fontSize: '1rem', fontWeight: 600 }}>Typografi</h3>
          <select
            value={theme.fontFamily}
            onChange={(e) => setTheme((prev) => ({ ...prev, fontFamily: e.target.value }))}
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              fontSize: '1rem',
            }}
          >
            {fontOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 1rem', fontSize: '1rem', fontWeight: 600 }}>Border Radius</h3>
          <select
            value={theme.borderRadius}
            onChange={(e) => setTheme((prev) => ({ ...prev, borderRadius: e.target.value }))}
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              fontSize: '1rem',
            }}
          >
            {radiusOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <HStack gap={3}>
          <Button onClick={copyCSS} variant="primary">
            {copied ? 'Kopiert!' : 'Kopier CSS'}
          </Button>
          <Button onClick={resetTheme} variant="outline">
            Tilbakestill
          </Button>
        </HStack>
      </div>

      {/* Right: Preview */}
      <div>
        <h2 style={{ margin: '0 0 1.5rem', fontSize: '1.5rem', fontWeight: 600 }}>
          Forhåndsvisning
        </h2>

        <VStack gap={4}>
          <div>
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Knapper</h3>
            <HStack gap={2}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </HStack>
          </div>

          <div>
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Varsler</h3>
            <VStack gap={2}>
              <Alert variant="info" title="Info">
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
          </div>

          <div>
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Badges</h3>
            <HStack gap={2}>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </HStack>
          </div>

          <div>
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
              Skjemaelementer
            </h3>
            <VStack gap={3}>
              <Input label="E-post" placeholder="navn@eksempel.no" />
              <Switch label="Motta nyhetsbrev" />
            </VStack>
          </div>
        </VStack>

        <div
          style={{
            marginTop: '2rem',
            padding: '1rem',
            background: 'var(--color-muted)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <h3 style={{ margin: '0 0 0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
            Generert CSS
          </h3>
          <pre
            style={{
              margin: 0,
              padding: '1rem',
              background: 'var(--color-gray-900)',
              color: 'var(--color-gray-100)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.75rem',
              overflow: 'auto',
              maxHeight: '200px',
            }}
          >
            {generateCSS()}
          </pre>
        </div>
      </div>
    </div>
  );
};

export const Editor: Story = {
  render: () => <ThemeEditorComponent />,
};
