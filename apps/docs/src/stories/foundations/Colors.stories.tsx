import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'Foundations/Farger',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const colorScales = {
  gray: {
    name: 'Papir/Beige (Gray)',
    colors: [
      { name: '50', var: '--color-gray-50', hex: '#F4F1EA' },
      { name: '100', var: '--color-gray-100', hex: '#EBE7DE' },
      { name: '200', var: '--color-gray-200', hex: '#E2DED4' },
      { name: '300', var: '--color-gray-300', hex: '#D4D0C6' },
      { name: '400', var: '--color-gray-400', hex: '#8A8A8A' },
      { name: '500', var: '--color-gray-500', hex: '#5A5A5A' },
      { name: '600', var: '--color-gray-600', hex: '#4A4A4A' },
      { name: '700', var: '--color-gray-700', hex: '#3A3A3A' },
      { name: '800', var: '--color-gray-800', hex: '#2C2C2C' },
      { name: '900', var: '--color-gray-900', hex: '#1C1C1C' },
      { name: '950', var: '--color-gray-950', hex: '#0C0C0C' },
    ],
  },
  primary: {
    name: 'Primary (Teal)',
    colors: [
      { name: '50', var: '--color-primary-50', hex: '#e6f2f5' },
      { name: '100', var: '--color-primary-100', hex: '#cce5eb' },
      { name: '200', var: '--color-primary-200', hex: '#99cbd7' },
      { name: '300', var: '--color-primary-300', hex: '#66b1c3' },
      { name: '400', var: '--color-primary-400', hex: '#3397af' },
      { name: '500', var: '--color-primary-500', hex: '#1a5f7a' },
      { name: '600', var: '--color-primary-600', hex: '#134a5f' },
      { name: '700', var: '--color-primary-700', hex: '#0f3a4a' },
      { name: '800', var: '--color-primary-800', hex: '#0b2a36' },
      { name: '900', var: '--color-primary-900', hex: '#071a21' },
      { name: '950', var: '--color-primary-950', hex: '#030d11' },
    ],
  },
  success: {
    name: 'Success (Grønn)',
    colors: [
      { name: '50', var: '--color-success-50', hex: '#eef5f0' },
      { name: '100', var: '--color-success-100', hex: '#ddebe1' },
      { name: '200', var: '--color-success-200', hex: '#bbd7c3' },
      { name: '300', var: '--color-success-300', hex: '#99c3a5' },
      { name: '400', var: '--color-success-400', hex: '#77af87' },
      { name: '500', var: '--color-success-500', hex: '#4A7C59' },
      { name: '600', var: '--color-success-600', hex: '#3b6347' },
      { name: '700', var: '--color-success-700', hex: '#2c4a35' },
      { name: '800', var: '--color-success-800', hex: '#1d3124' },
      { name: '900', var: '--color-success-900', hex: '#0f1912' },
      { name: '950', var: '--color-success-950', hex: '#070c09' },
    ],
  },
  warning: {
    name: 'Warning (Jordtone)',
    colors: [
      { name: '50', var: '--color-warning-50', hex: '#f5f2ed' },
      { name: '100', var: '--color-warning-100', hex: '#ebe5db' },
      { name: '200', var: '--color-warning-200', hex: '#d7cbb7' },
      { name: '300', var: '--color-warning-300', hex: '#c3b193' },
      { name: '400', var: '--color-warning-400', hex: '#af976f' },
      { name: '500', var: '--color-warning-500', hex: '#7B6D4D' },
      { name: '600', var: '--color-warning-600', hex: '#62573e' },
      { name: '700', var: '--color-warning-700', hex: '#4a412e' },
      { name: '800', var: '--color-warning-800', hex: '#312b1f' },
      { name: '900', var: '--color-warning-900', hex: '#19150f' },
      { name: '950', var: '--color-warning-950', hex: '#0c0b08' },
    ],
  },
  error: {
    name: 'Error (Rust)',
    colors: [
      { name: '50', var: '--color-error-50', hex: '#faf2f0' },
      { name: '100', var: '--color-error-100', hex: '#f5e5e1' },
      { name: '200', var: '--color-error-200', hex: '#ebcbc3' },
      { name: '300', var: '--color-error-300', hex: '#e1b1a5' },
      { name: '400', var: '--color-error-400', hex: '#d79787' },
      { name: '500', var: '--color-error-500', hex: '#9B2915' },
      { name: '600', var: '--color-error-600', hex: '#7c2111' },
      { name: '700', var: '--color-error-700', hex: '#5d190d' },
      { name: '800', var: '--color-error-800', hex: '#3e1008' },
      { name: '900', var: '--color-error-900', hex: '#1f0804' },
      { name: '950', var: '--color-error-950', hex: '#100402' },
    ],
  },
  info: {
    name: 'Info/Neutral (Oliven)',
    colors: [
      { name: '50', var: '--color-info-50', hex: '#f2f3f0' },
      { name: '100', var: '--color-info-100', hex: '#e5e7e1' },
      { name: '200', var: '--color-info-200', hex: '#cbcfc3' },
      { name: '300', var: '--color-info-300', hex: '#b1b7a5' },
      { name: '400', var: '--color-info-400', hex: '#979f87' },
      { name: '500', var: '--color-info-500', hex: '#6B705C' },
      { name: '600', var: '--color-info-600', hex: '#565a4a' },
      { name: '700', var: '--color-info-700', hex: '#404337' },
      { name: '800', var: '--color-info-800', hex: '#2b2d25' },
      { name: '900', var: '--color-info-900', hex: '#151612' },
      { name: '950', var: '--color-info-950', hex: '#0b0b09' },
    ],
  },
};

const semanticColors = [
  {
    name: 'Background',
    var: '--color-background',
    description: 'Varm beige/papir bakgrunn (#F4F1EA)',
  },
  { name: 'Foreground', var: '--color-foreground', description: 'Mørk tekst (#2C2C2C)' },
  { name: 'Muted', var: '--color-muted', description: 'Sekundær bakgrunn (#EBE7DE)' },
  {
    name: 'Muted Foreground',
    var: '--color-muted-foreground',
    description: 'Sekundær tekst (#5A5A5A)',
  },
  { name: 'Accent', var: '--color-accent', description: 'Dempet blågrønn aksent (#1a5f7a)' },
  { name: 'Border', var: '--color-border', description: 'Varm kantfarge (#D4D0C6)' },
  { name: 'Ring', var: '--color-ring', description: 'Fokusring (#1a5f7a)' },
  { name: 'Hover', var: '--color-hover', description: 'Hover-tilstand (#E2DED4)' },
];

const ColorSwatch = ({ color }: { color: { name: string; var: string; hex: string } }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={() => copyToClipboard(`var(${color.var})`)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        width: '100%',
      }}
      title={`Klikk for å kopiere: var(${color.var})`}
    >
      <div
        style={{
          width: '100%',
          height: '48px',
          backgroundColor: `var(${color.var})`,
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border)',
          marginBottom: '0.5rem',
        }}
      />
      <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>
        {copied ? 'Kopiert!' : color.name}
      </span>
      <span
        style={{
          fontSize: '0.625rem',
          color: 'var(--color-muted-foreground)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        {color.hex}
      </span>
    </button>
  );
};

const ColorScale = ({ scale }: { scale: (typeof colorScales)[keyof typeof colorScales] }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3 style={{ margin: '0 0 1rem', fontSize: '1rem', fontWeight: 600 }}>{scale.name}</h3>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(11, 1fr)',
        gap: '0.5rem',
      }}
    >
      {scale.colors.map((color) => (
        <ColorSwatch key={color.var} color={color} />
      ))}
    </div>
  </div>
);

const SemanticColorRow = ({
  color,
}: {
  color: { name: string; var: string; description: string };
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(`var(${color.var})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={copyToClipboard}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.75rem',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-background)',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'left',
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          backgroundColor: `var(${color.var})`,
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border)',
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 500, marginBottom: '0.25rem' }}>{color.name}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--color-muted-foreground)' }}>
          {color.description}
        </div>
        <code
          style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--color-muted-foreground)',
          }}
        >
          {color.var}
        </code>
      </div>
      <span style={{ fontSize: '0.75rem', color: 'var(--color-muted-foreground)' }}>
        {copied ? 'Kopiert!' : 'Klikk for å kopiere'}
      </span>
    </button>
  );
};

const ColorsComponent = () => (
  <div>
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 600 }}>Fargepalett</h2>
      <p style={{ margin: '0 0 2rem', color: 'var(--color-muted-foreground)' }}>
        Klikk på en farge for å kopiere CSS-variabelen. Bruk{' '}
        <code style={{ fontFamily: 'var(--font-mono)' }}>var(--color-...)</code> i CSS.
      </p>

      {Object.values(colorScales).map((scale) => (
        <ColorScale key={scale.name} scale={scale} />
      ))}
    </div>

    <div>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 600 }}>
        Semantiske farger
      </h2>
      <p style={{ margin: '0 0 2rem', color: 'var(--color-muted-foreground)' }}>
        Bruk semantiske farger for tema-støtte. Disse endres automatisk i mørk modus.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {semanticColors.map((color) => (
          <SemanticColorRow key={color.var} color={color} />
        ))}
      </div>
    </div>
  </div>
);

export const Farger: Story = {
  render: () => <ColorsComponent />,
};
