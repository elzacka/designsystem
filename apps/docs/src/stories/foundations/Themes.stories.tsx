import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Foundations/Temaer',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const accents = [
  {
    name: 'Teal',
    apps: ['Lyttejeger', 'Sporjeger'],
    color: '#1a5f7a',
    description: 'Lyd, bolger, dybde',
    import: "import '@designsystem/tokens/themes/accents/teal';",
  },
  {
    name: 'Forest',
    apps: ['Skrive'],
    color: '#4A7C59',
    description: 'Blekk, papir, skog/ro',
    import: "import '@designsystem/tokens/themes/accents/forest';",
  },
  {
    name: 'Earth',
    apps: ['Trakke'],
    color: '#7B6D4D',
    description: 'Natur, sti, jord',
    import: "import '@designsystem/tokens/themes/accents/earth';",
  },
];

const ThemesComponent = () => (
  <div>
    {/* Intro */}
    <section style={{ marginBottom: '3rem' }}>
      <h2
        style={{
          margin: '0 0 0.5rem',
          fontSize: '1.5rem',
          fontWeight: 600,
          fontFamily: 'var(--font-mono)',
        }}
      >
        Tema-arkitektur
      </h2>
      <p style={{ margin: '0 0 1rem', color: 'var(--color-muted-foreground)' }}>
        Designsystemet bruker en lagdelt struktur: felles primitives, base-tema (din signatur), og
        app-spesifikke aksenter.
      </p>

      <div
        style={{
          padding: '1.5rem',
          background: 'var(--color-muted)',
          borderRadius: 'var(--radius-md)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.875rem',
          marginBottom: '2rem',
        }}
      >
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
          {`packages/tokens/src/
+-- primitives.css     # Spacing, shadows, motion, etc.
+-- themes/
|   +-- base.css       # Papir + DM Mono + Inter
|   +-- accents/
|       +-- teal.css   # Lyttejeger, Sporjeger
|       +-- forest.css # Skrive
|       +-- earth.css  # Trakke
+-- index.css          # Default (primitives + base + teal)`}
        </pre>
      </div>
    </section>

    {/* Visual identity */}
    <section style={{ marginBottom: '3rem' }}>
      <h2
        style={{
          margin: '0 0 1rem',
          fontSize: '1.5rem',
          fontWeight: 600,
          fontFamily: 'var(--font-mono)',
        }}
      >
        Felles signatur
      </h2>
      <p style={{ margin: '0 0 1rem', color: 'var(--color-muted-foreground)' }}>
        Alle apper deler disse elementene for a vaere gjenkjennbare:
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
        }}
      >
        <div
          style={{
            padding: '1rem',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '48px',
              background: 'var(--color-background)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              marginBottom: '0.5rem',
            }}
          />
          <div style={{ fontWeight: 500 }}>Papir-beige</div>
          <code
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-muted-foreground)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            #F4F1EA
          </code>
        </div>

        <div
          style={{
            padding: '1rem',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: '1.25rem',
              background: 'var(--color-muted)',
              borderRadius: 'var(--radius-md)',
              marginBottom: '0.5rem',
            }}
          >
            Aa Ff
          </div>
          <div style={{ fontWeight: 500 }}>DM Mono</div>
          <code
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-muted-foreground)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            --font-mono
          </code>
        </div>

        <div
          style={{
            padding: '1rem',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-sans)',
              fontSize: '1.25rem',
              background: 'var(--color-muted)',
              borderRadius: 'var(--radius-md)',
              marginBottom: '0.5rem',
            }}
          >
            Aa Bb Cc
          </div>
          <div style={{ fontWeight: 500 }}>Inter</div>
          <code
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-muted-foreground)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            --font-sans
          </code>
        </div>

        <div
          style={{
            padding: '1rem',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                background: 'var(--color-muted)',
                borderRadius: '2px',
              }}
            />
            <div
              style={{
                width: '32px',
                height: '32px',
                background: 'var(--color-muted)',
                borderRadius: '4px',
              }}
            />
            <div
              style={{
                width: '32px',
                height: '32px',
                background: 'var(--color-muted)',
                borderRadius: '8px',
              }}
            />
          </div>
          <div style={{ fontWeight: 500 }}>Subtil radius</div>
          <code
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-muted-foreground)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            4px default
          </code>
        </div>
      </div>
    </section>

    {/* Accents */}
    <section style={{ marginBottom: '3rem' }}>
      <h2
        style={{
          margin: '0 0 1rem',
          fontSize: '1.5rem',
          fontWeight: 600,
          fontFamily: 'var(--font-mono)',
        }}
      >
        App-aksenter
      </h2>
      <p style={{ margin: '0 0 1rem', color: 'var(--color-muted-foreground)' }}>
        Bruk aksent-velgeren i toolbaren for a se hvordan komponentene ser ut med ulike aksenter.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {accents.map((accent) => (
          <div
            key={accent.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                background: accent.color,
                borderRadius: 'var(--radius-md)',
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{ fontWeight: 600, fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}
              >
                {accent.name}
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-muted-foreground)',
                  marginBottom: '0.25rem',
                }}
              >
                {accent.description}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-muted-foreground)' }}>
                Apper: {accent.apps.join(', ')}
              </div>
            </div>
            <code
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-muted-foreground)',
                background: 'var(--color-muted)',
                padding: '0.25rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              {accent.color}
            </code>
          </div>
        ))}
      </div>
    </section>

    {/* Usage */}
    <section style={{ marginBottom: '3rem' }}>
      <h2
        style={{
          margin: '0 0 1rem',
          fontSize: '1.5rem',
          fontWeight: 600,
          fontFamily: 'var(--font-mono)',
        }}
      >
        Bruk i apper
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div
          style={{
            padding: '1rem',
            background: 'var(--color-muted)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <div style={{ fontWeight: 500, marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
            Standard (Lyttejeger, Sporjeger)
          </div>
          <pre
            style={{
              margin: 0,
              fontSize: '0.875rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-foreground)',
            }}
          >
            {`import '@designsystem/tokens';
// Inkluderer: primitives + base + teal`}
          </pre>
        </div>

        <div
          style={{
            padding: '1rem',
            background: 'var(--color-muted)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <div style={{ fontWeight: 500, marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
            Skrive (forest aksent)
          </div>
          <pre
            style={{
              margin: 0,
              fontSize: '0.875rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-foreground)',
            }}
          >
            {`import '@designsystem/tokens/primitives';
import '@designsystem/tokens/themes/base';
import '@designsystem/tokens/themes/accents/forest';`}
          </pre>
        </div>

        <div
          style={{
            padding: '1rem',
            background: 'var(--color-muted)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <div style={{ fontWeight: 500, marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
            Trakke (earth aksent)
          </div>
          <pre
            style={{
              margin: 0,
              fontSize: '0.875rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-foreground)',
            }}
          >
            {`import '@designsystem/tokens/primitives';
import '@designsystem/tokens/themes/base';
import '@designsystem/tokens/themes/accents/earth';`}
          </pre>
        </div>
      </div>
    </section>

    {/* Live preview */}
    <section>
      <h2
        style={{
          margin: '0 0 1rem',
          fontSize: '1.5rem',
          fontWeight: 600,
          fontFamily: 'var(--font-mono)',
        }}
      >
        Live forhåndsvisning
      </h2>
      <p style={{ margin: '0 0 1rem', color: 'var(--color-muted-foreground)' }}>
        Disse elementene endres nar du bytter aksent i toolbaren:
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
        }}
      >
        <button
          style={{
            padding: '0.75rem 1.5rem',
            background: 'var(--color-accent)',
            color: 'var(--color-accent-foreground)',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Primar-knapp
        </button>

        <button
          style={{
            padding: '0.75rem 1.5rem',
            background: 'transparent',
            color: 'var(--color-accent)',
            border: '1px solid var(--color-accent)',
            borderRadius: 'var(--radius-md)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Sekundar-knapp
        </button>

        <div
          style={{
            padding: '0.5rem 1rem',
            background: 'var(--color-primary-100)',
            color: 'var(--color-primary-700)',
            borderRadius: 'var(--radius-full)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.875rem',
            textAlign: 'center',
          }}
        >
          Badge
        </div>

        <button
          type="button"
          style={{
            color: 'var(--color-accent)',
            textDecoration: 'underline',
            fontFamily: 'var(--font-mono)',
            padding: '0.75rem',
            display: 'block',
            textAlign: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Lenke
        </button>
      </div>
    </section>
  </div>
);

export const Temaer: Story = {
  render: () => <ThemesComponent />,
};
