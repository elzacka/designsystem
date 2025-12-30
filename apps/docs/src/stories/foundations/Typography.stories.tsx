import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'Foundations/Typografi',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const fontSizes = [
  { name: 'text-xs', var: '--text-xs', size: '0.75rem', px: '12px' },
  { name: 'text-sm', var: '--text-sm', size: '0.8125rem', px: '13px' },
  { name: 'text-base', var: '--text-base', size: '1rem', px: '16px' },
  { name: 'text-lg', var: '--text-lg', size: '1.125rem', px: '18px' },
  { name: 'text-xl', var: '--text-xl', size: '1.25rem', px: '20px' },
  { name: 'text-2xl', var: '--text-2xl', size: '1.5rem', px: '24px' },
  { name: 'text-3xl', var: '--text-3xl', size: '1.875rem', px: '30px' },
  { name: 'text-4xl', var: '--text-4xl', size: '2.25rem', px: '36px' },
  { name: 'text-5xl', var: '--text-5xl', size: '3rem', px: '48px' },
  { name: 'text-6xl', var: '--text-6xl', size: '3.75rem', px: '60px' },
  { name: 'text-7xl', var: '--text-7xl', size: '4.5rem', px: '72px' },
];

const monoSizes = [
  {
    name: 'text-mono-xs',
    var: '--text-mono-xs',
    size: '0.8125rem',
    px: '13px',
    use: 'Labels, badges',
  },
  {
    name: 'text-mono-sm',
    var: '--text-mono-sm',
    size: '0.875rem',
    px: '14px',
    use: 'Buttons, inputs',
  },
  {
    name: 'text-mono-base',
    var: '--text-mono-base',
    size: '1.0625rem',
    px: '17px',
    use: 'Large labels',
  },
];

const fontWeights = [
  { name: 'Light', var: '--font-light', value: 300, supported: true },
  { name: 'Normal', var: '--font-normal', value: 400, supported: true },
  { name: 'Medium', var: '--font-medium', value: 500, supported: true },
];

const lineHeights = [
  { name: 'None', var: '--leading-none', value: '1' },
  { name: 'Tight', var: '--leading-tight', value: '1.3' },
  { name: 'Snug', var: '--leading-snug', value: '1.4' },
  { name: 'Normal', var: '--leading-normal', value: '1.6' },
  { name: 'Relaxed', var: '--leading-relaxed', value: '1.75' },
  { name: 'Loose', var: '--leading-loose', value: '2' },
];

const typeScale = [
  {
    name: 'Display Large',
    variant: 'display-lg',
    size: '72px',
    weight: 'Medium',
    use: 'Hero overskrifter',
  },
  {
    name: 'Display Medium',
    variant: 'display-md',
    size: '60px',
    weight: 'Medium',
    use: 'Markedsføring',
  },
  {
    name: 'Display Small',
    variant: 'display-sm',
    size: '48px',
    weight: 'Medium',
    use: 'Store seksjoner',
  },
  { name: 'Heading XL', variant: 'heading-xl', size: '36px', weight: 'Medium', use: 'H1' },
  { name: 'Heading LG', variant: 'heading-lg', size: '30px', weight: 'Medium', use: 'H2' },
  { name: 'Heading MD', variant: 'heading-md', size: '24px', weight: 'Medium', use: 'H3' },
  { name: 'Heading SM', variant: 'heading-sm', size: '20px', weight: 'Medium', use: 'H4' },
  { name: 'Heading XS', variant: 'heading-xs', size: '18px', weight: 'Medium', use: 'H5' },
  { name: 'Body Large', variant: 'body-lg', size: '18px', weight: 'Normal', use: 'Lead tekst' },
  { name: 'Body Medium', variant: 'body-md', size: '16px', weight: 'Normal', use: 'Brødtekst' },
  { name: 'Body Small', variant: 'body-sm', size: '13px', weight: 'Normal', use: 'Sekundær tekst' },
  { name: 'Label Large', variant: 'label-lg', size: '17px', weight: 'Medium', use: 'Store labels' },
  { name: 'Label Medium', variant: 'label-md', size: '14px', weight: 'Medium', use: 'Form labels' },
  { name: 'Label Small', variant: 'label-sm', size: '13px', weight: 'Medium', use: 'Små labels' },
  { name: 'Caption', variant: 'caption', size: '12px', weight: 'Normal', use: 'Hjelpetekst' },
];

const CopyButton = ({ text, label }: { text: string; label: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={copy}
      style={{
        padding: '0.25rem 0.5rem',
        fontSize: '0.75rem',
        fontFamily: 'var(--font-mono)',
        background: 'var(--color-muted)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        color: 'var(--color-foreground)',
      }}
    >
      {copied ? 'Kopiert!' : label}
    </button>
  );
};

const TypographyComponent = () => (
  <div>
    {/* Font Family */}
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 500 }}>Font</h2>
      <p
        style={{ margin: '0 0 1rem', color: 'var(--color-muted-foreground)', fontSize: '0.875rem' }}
      >
        Designsystemet bruker kun DM Mono for en konsekvent, retro-inspirert estetikk.
      </p>
      <div
        style={{
          padding: '1.5rem',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          background: 'var(--color-muted)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '1rem',
          }}
        >
          <div>
            <h3 style={{ margin: '0 0 0.25rem', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>
              DM Mono
            </h3>
            <code
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-muted-foreground)',
              }}
            >
              --font-mono
            </code>
          </div>
          <CopyButton text="var(--font-mono)" label="Kopier" />
        </div>
        <p style={{ margin: 0, fontSize: '2rem', fontFamily: 'var(--font-mono)', fontWeight: 400 }}>
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
        </p>
        <p
          style={{
            margin: '0.5rem 0',
            fontSize: '2rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 400,
          }}
        >
          0123456789 {`{ } [ ] ( ) < > @ # $ %`}
        </p>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-muted-foreground)' }}>
              Light (300)
            </span>
            <p style={{ margin: '0.25rem 0 0', fontSize: '1.25rem', fontWeight: 300 }}>
              Den raske brune reven
            </p>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-muted-foreground)' }}>
              Regular (400)
            </span>
            <p style={{ margin: '0.25rem 0 0', fontSize: '1.25rem', fontWeight: 400 }}>
              Den raske brune reven
            </p>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-muted-foreground)' }}>
              Medium (500)
            </span>
            <p style={{ margin: '0.25rem 0 0', fontSize: '1.25rem', fontWeight: 500 }}>
              Den raske brune reven
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Type Scale */}
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 500 }}>
        Typografisk skala
      </h2>
      <p
        style={{ margin: '0 0 1rem', color: 'var(--color-muted-foreground)', fontSize: '0.875rem' }}
      >
        Hierarkiet er designet for monospace-lesbarhet med passende spacing og vekt.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        {typeScale.map((item) => (
          <div
            key={item.variant}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem 1rem',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <div style={{ width: '120px', flexShrink: 0 }}>
              <code
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-muted-foreground)',
                }}
              >
                {item.variant}
              </code>
            </div>
            <div
              style={{
                width: '50px',
                flexShrink: 0,
                fontSize: '0.75rem',
                color: 'var(--color-muted-foreground)',
              }}
            >
              {item.size}
            </div>
            <div
              style={{
                width: '60px',
                flexShrink: 0,
                fontSize: '0.75rem',
                color: 'var(--color-muted-foreground)',
              }}
            >
              {item.weight}
            </div>
            <div
              className={`ds-text ds-text--${item.variant}`}
              style={{
                flex: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              Den raske brune reven
            </div>
            <div
              style={{
                width: '100px',
                flexShrink: 0,
                fontSize: '0.75rem',
                color: 'var(--color-muted-foreground)',
              }}
            >
              {item.use}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Font Sizes */}
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{ margin: '0 0 1rem', fontSize: '1.5rem', fontWeight: 500 }}>Tekststørrelser</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {fontSizes.map((size) => (
          <div
            key={size.var}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem 1rem',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <div style={{ width: '100px', flexShrink: 0 }}>
              <code
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-muted-foreground)',
                }}
              >
                {size.name}
              </code>
            </div>
            <div
              style={{
                width: '80px',
                flexShrink: 0,
                fontSize: '0.75rem',
                color: 'var(--color-muted-foreground)',
              }}
            >
              {size.px}
            </div>
            <div
              style={{
                flex: 1,
                fontSize: `var(${size.var})`,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              Den raske brune reven
            </div>
            <CopyButton text={`var(${size.var})`} label={size.var} />
          </div>
        ))}
      </div>
    </section>

    {/* Mono-optimized Sizes */}
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 500 }}>
        Mono-optimerte størrelser
      </h2>
      <p
        style={{ margin: '0 0 1rem', color: 'var(--color-muted-foreground)', fontSize: '0.875rem' }}
      >
        Litt større størrelser for UI-elementer, optimert for optisk balanse med monospace.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {monoSizes.map((size) => (
          <div
            key={size.var}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem 1rem',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-muted)',
            }}
          >
            <div style={{ width: '120px', flexShrink: 0 }}>
              <code
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-muted-foreground)',
                }}
              >
                {size.name}
              </code>
            </div>
            <div
              style={{
                width: '50px',
                flexShrink: 0,
                fontSize: '0.75rem',
                color: 'var(--color-muted-foreground)',
              }}
            >
              {size.px}
            </div>
            <div style={{ flex: 1, fontSize: `var(${size.var})`, fontWeight: 500 }}>{size.use}</div>
            <CopyButton text={`var(${size.var})`} label={size.var} />
          </div>
        ))}
      </div>
    </section>

    {/* Font Weights */}
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 500 }}>Tekstvekter</h2>
      <p
        style={{ margin: '0 0 1rem', color: 'var(--color-muted-foreground)', fontSize: '0.875rem' }}
      >
        DM Mono støtter tre vekter: Light (300), Regular (400), og Medium (500).
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {fontWeights.map((weight) => (
          <div
            key={weight.var}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem 1rem',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <div style={{ width: '100px', flexShrink: 0 }}>
              <code
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-muted-foreground)',
                }}
              >
                {weight.name}
              </code>
            </div>
            <div
              style={{
                width: '50px',
                flexShrink: 0,
                fontSize: '0.75rem',
                color: 'var(--color-muted-foreground)',
              }}
            >
              {weight.value}
            </div>
            <div style={{ flex: 1, fontSize: '1.25rem', fontWeight: weight.value }}>
              Den raske brune reven hopper over den late hunden
            </div>
            <CopyButton text={`var(${weight.var})`} label={weight.var} />
          </div>
        ))}
      </div>
    </section>

    {/* Line Heights */}
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 500 }}>Linjehøyder</h2>
      <p
        style={{ margin: '0 0 1rem', color: 'var(--color-muted-foreground)', fontSize: '0.875rem' }}
      >
        Justert for bedre lesbarhet med monospace. Generelt litt høyere enn for proportionale
        fonter.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
        }}
      >
        {lineHeights.map((lh) => (
          <div
            key={lh.var}
            style={{
              padding: '1rem',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.75rem',
              }}
            >
              <div>
                <div style={{ fontWeight: 500 }}>{lh.name}</div>
                <code
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-muted-foreground)',
                  }}
                >
                  {lh.value}
                </code>
              </div>
              <CopyButton text={`var(${lh.var})`} label="Kopier" />
            </div>
            <p
              style={{
                margin: 0,
                fontSize: '0.875rem',
                lineHeight: `var(${lh.var})`,
                padding: '0.5rem',
                background: 'var(--color-muted)',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore.
            </p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export const Typografi: Story = {
  render: () => <TypographyComponent />,
};
