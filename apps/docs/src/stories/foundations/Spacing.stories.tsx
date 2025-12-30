import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'Foundations/Spacing',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const spacingTokens = [
  { name: '0', var: '--space-0', value: '0', px: '0px' },
  { name: 'px', var: '--space-px', value: '1px', px: '1px' },
  { name: '0.5', var: '--space-0-5', value: '0.125rem', px: '2px' },
  { name: '1', var: '--space-1', value: '0.25rem', px: '4px' },
  { name: '1.5', var: '--space-1-5', value: '0.375rem', px: '6px' },
  { name: '2', var: '--space-2', value: '0.5rem', px: '8px' },
  { name: '2.5', var: '--space-2-5', value: '0.625rem', px: '10px' },
  { name: '3', var: '--space-3', value: '0.75rem', px: '12px' },
  { name: '3.5', var: '--space-3-5', value: '0.875rem', px: '14px' },
  { name: '4', var: '--space-4', value: '1rem', px: '16px' },
  { name: '5', var: '--space-5', value: '1.25rem', px: '20px' },
  { name: '6', var: '--space-6', value: '1.5rem', px: '24px' },
  { name: '7', var: '--space-7', value: '1.75rem', px: '28px' },
  { name: '8', var: '--space-8', value: '2rem', px: '32px' },
  { name: '9', var: '--space-9', value: '2.25rem', px: '36px' },
  { name: '10', var: '--space-10', value: '2.5rem', px: '40px' },
  { name: '11', var: '--space-11', value: '2.75rem', px: '44px' },
  { name: '12', var: '--space-12', value: '3rem', px: '48px' },
  { name: '14', var: '--space-14', value: '3.5rem', px: '56px' },
  { name: '16', var: '--space-16', value: '4rem', px: '64px' },
  { name: '20', var: '--space-20', value: '5rem', px: '80px' },
  { name: '24', var: '--space-24', value: '6rem', px: '96px' },
  { name: '28', var: '--space-28', value: '7rem', px: '112px' },
  { name: '32', var: '--space-32', value: '8rem', px: '128px' },
];

const containerSizes = [
  { name: 'sm', var: '--container-sm', value: '640px' },
  { name: 'md', var: '--container-md', value: '768px' },
  { name: 'lg', var: '--container-lg', value: '1024px' },
  { name: 'xl', var: '--container-xl', value: '1280px' },
  { name: '2xl', var: '--container-2xl', value: '1536px' },
];

const CopyButton = ({ text }: { text: string }) => {
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
        fontSize: '0.625rem',
        fontFamily: 'var(--font-mono)',
        background: 'var(--color-muted)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        color: 'var(--color-foreground)',
        whiteSpace: 'nowrap',
      }}
    >
      {copied ? 'Kopiert!' : text}
    </button>
  );
};

const SpacingComponent = () => (
  <div>
    {/* Spacing Scale */}
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 600 }}>Spacing-skala</h2>
      <p style={{ margin: '0 0 2rem', color: 'var(--color-muted-foreground)' }}>
        Bruk spacing-tokens for margin, padding og gap. Basert på 4px grid-system.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        {spacingTokens.map((token) => (
          <div
            key={token.var}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.5rem 0.75rem',
              background: 'var(--color-background)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <div style={{ width: '40px', fontSize: '0.875rem', fontWeight: 500 }}>{token.name}</div>
            <div
              style={{ width: '60px', fontSize: '0.75rem', color: 'var(--color-muted-foreground)' }}
            >
              {token.px}
            </div>
            <div
              style={{
                height: '24px',
                width: `var(${token.var})`,
                minWidth: '2px',
                background: 'var(--color-primary-500)',
                borderRadius: '2px',
              }}
            />
            <div style={{ flex: 1 }} />
            <CopyButton text={`var(${token.var})`} />
          </div>
        ))}
      </div>
    </section>

    {/* Visual Grid */}
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 600 }}>
        Visuelt eksempel
      </h2>
      <p style={{ margin: '0 0 2rem', color: 'var(--color-muted-foreground)' }}>
        Spacing brukt som padding og gap mellom elementer.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
        }}
      >
        {[2, 4, 6, 8].map((size) => (
          <div key={size}>
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                marginBottom: '0.5rem',
                color: 'var(--color-muted-foreground)',
              }}
            >
              space-{size} ({size * 4}px)
            </div>
            <div
              style={{
                padding: `var(--space-${size})`,
                background: 'var(--color-primary-100)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <div
                style={{
                  background: 'var(--color-primary-500)',
                  color: 'white',
                  padding: '0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  textAlign: 'center',
                }}
              >
                Innhold
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Container Sizes */}
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 600 }}>
        Container-størrelser
      </h2>
      <p style={{ margin: '0 0 2rem', color: 'var(--color-muted-foreground)' }}>
        Maksbredder for innholdscontainere.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {containerSizes.map((container) => (
          <div
            key={container.var}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div style={{ width: '50px', fontWeight: 500 }}>{container.name}</div>
            <div
              style={{
                height: '32px',
                width: container.value,
                maxWidth: '100%',
                background: 'var(--color-primary-100)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                color: 'var(--color-primary-700)',
              }}
            >
              {container.value}
            </div>
            <CopyButton text={`var(${container.var})`} />
          </div>
        ))}
      </div>
    </section>

    {/* Usage Examples */}
    <section>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 600 }}>Bruk i CSS</h2>
      <pre
        style={{
          padding: '1rem',
          background: 'var(--color-gray-900)',
          color: 'var(--color-gray-100)',
          borderRadius: 'var(--radius-md)',
          overflow: 'auto',
          fontSize: '0.875rem',
        }}
      >
        {`.card {
  padding: var(--space-4);      /* 16px */
  margin-bottom: var(--space-6); /* 24px */
}

.stack {
  gap: var(--space-3);           /* 12px */
}

.container {
  max-width: var(--container-lg); /* 1024px */
  margin: 0 auto;
  padding: 0 var(--space-4);
}`}
      </pre>
    </section>
  </div>
);

export const Spacing: Story = {
  render: () => <SpacingComponent />,
};
