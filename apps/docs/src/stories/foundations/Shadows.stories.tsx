import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'Foundations/Shadows & Radius',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const shadows = [
  { name: 'None', var: '--shadow-none', value: 'none' },
  { name: 'Small', var: '--shadow-sm', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
  { name: 'Medium', var: '--shadow-md', value: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
  { name: 'Large', var: '--shadow-lg', value: '0 10px 15px -3px rgb(0 0 0 / 0.1)' },
  { name: 'XL', var: '--shadow-xl', value: '0 20px 25px -5px rgb(0 0 0 / 0.1)' },
  { name: '2XL', var: '--shadow-2xl', value: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
  { name: 'Inner', var: '--shadow-inner', value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)' },
];

const borderRadii = [
  { name: 'None', var: '--radius-none', value: '0', px: '0px' },
  { name: 'Small', var: '--radius-sm', value: '0.125rem', px: '2px' },
  { name: 'Medium', var: '--radius-md', value: '0.375rem', px: '6px' },
  { name: 'Large', var: '--radius-lg', value: '0.5rem', px: '8px' },
  { name: 'XL', var: '--radius-xl', value: '0.75rem', px: '12px' },
  { name: '2XL', var: '--radius-2xl', value: '1rem', px: '16px' },
  { name: '3XL', var: '--radius-3xl', value: '1.5rem', px: '24px' },
  { name: 'Full', var: '--radius-full', value: '9999px', px: 'Full' },
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
      {copied ? 'Kopiert!' : 'Kopier'}
    </button>
  );
};

const ShadowsAndRadiusComponent = () => (
  <div>
    {/* Shadows */}
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 600 }}>Skygger</h2>
      <p style={{ margin: '0 0 2rem', color: 'var(--color-muted-foreground)' }}>
        Bruk skygger for å skape dybde og hierarki i grensesnittet.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {shadows.map((shadow) => (
          <div key={shadow.var}>
            <div
              style={{
                width: '100%',
                height: '100px',
                background: 'var(--color-background)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: `var(${shadow.var})`,
                border: shadow.name === 'None' ? '1px solid var(--color-border)' : 'none',
                marginBottom: '0.75rem',
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontWeight: 500, fontSize: '0.875rem' }}>{shadow.name}</div>
                <code
                  style={{
                    fontSize: '0.625rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-muted-foreground)',
                  }}
                >
                  {shadow.var}
                </code>
              </div>
              <CopyButton text={`var(${shadow.var})`} />
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Border Radius */}
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 600 }}>Border Radius</h2>
      <p style={{ margin: '0 0 2rem', color: 'var(--color-muted-foreground)' }}>
        Avrundede hjørner for konsistent design.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {borderRadii.map((radius) => (
          <div key={radius.var}>
            <div
              style={{
                width: '100%',
                height: '80px',
                background: 'var(--color-primary-500)',
                borderRadius: `var(${radius.var})`,
                marginBottom: '0.75rem',
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontWeight: 500, fontSize: '0.875rem' }}>{radius.name}</div>
                <code
                  style={{
                    fontSize: '0.625rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-muted-foreground)',
                  }}
                >
                  {radius.px}
                </code>
              </div>
              <CopyButton text={`var(${radius.var})`} />
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Combined Example */}
    <section>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 600 }}>
        Kombinert eksempel
      </h2>
      <p style={{ margin: '0 0 2rem', color: 'var(--color-muted-foreground)' }}>
        Skygger og radius brukt sammen for kort-design.
      </p>

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <div
          style={{
            width: '200px',
            padding: 'var(--space-4)',
            background: 'var(--color-background)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--color-border)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100px',
              background: 'var(--color-muted)',
              borderRadius: 'var(--radius-md)',
              marginBottom: 'var(--space-3)',
            }}
          />
          <div style={{ fontWeight: 600, marginBottom: 'var(--space-1)' }}>Flat kort</div>
          <div style={{ fontSize: '0.875rem', color: 'var(--color-muted-foreground)' }}>
            shadow-sm + radius-lg
          </div>
        </div>

        <div
          style={{
            width: '200px',
            padding: 'var(--space-4)',
            background: 'var(--color-background)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100px',
              background: 'var(--color-muted)',
              borderRadius: 'var(--radius-lg)',
              marginBottom: 'var(--space-3)',
            }}
          />
          <div style={{ fontWeight: 600, marginBottom: 'var(--space-1)' }}>Hevet kort</div>
          <div style={{ fontSize: '0.875rem', color: 'var(--color-muted-foreground)' }}>
            shadow-md + radius-xl
          </div>
        </div>

        <div
          style={{
            width: '200px',
            padding: 'var(--space-4)',
            background: 'var(--color-background)',
            borderRadius: 'var(--radius-2xl)',
            boxShadow: 'var(--shadow-xl)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100px',
              background: 'var(--color-muted)',
              borderRadius: 'var(--radius-xl)',
              marginBottom: 'var(--space-3)',
            }}
          />
          <div style={{ fontWeight: 600, marginBottom: 'var(--space-1)' }}>Fremtredende kort</div>
          <div style={{ fontSize: '0.875rem', color: 'var(--color-muted-foreground)' }}>
            shadow-xl + radius-2xl
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const ShadowsOgRadius: Story = {
  render: () => <ShadowsAndRadiusComponent />,
};
