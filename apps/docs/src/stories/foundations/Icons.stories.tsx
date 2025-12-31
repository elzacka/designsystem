import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  // Felles UI-ikoner
  CloseIcon,
  ChevronIcon,
  SearchIcon,
  SpinnerIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  ErrorIcon,
  // Tråkke outdoor-ikoner
  MountainIcon,
  CompassIcon,
  TentIcon,
  FootprintsIcon,
  MapPinIcon,
  LayersIcon,
  LocateIcon,
  RouteIcon,
  TreePineIcon,
  BinocularsIcon,
} from '@designsystem/core';

const meta = {
  title: 'Foundations/Ikoner',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Kategoriserte ikoner fra designsystemet
const iconCategories = {
  'Felles UI': [
    { name: 'CloseIcon', component: CloseIcon },
    { name: 'ChevronIcon', component: ChevronIcon },
    { name: 'SearchIcon', component: SearchIcon },
    { name: 'SpinnerIcon', component: SpinnerIcon },
  ],
  Varsler: [
    { name: 'InfoIcon', component: InfoIcon },
    { name: 'SuccessIcon', component: SuccessIcon },
    { name: 'WarningIcon', component: WarningIcon },
    { name: 'ErrorIcon', component: ErrorIcon },
  ],
  'Tråkke - Outdoor': [
    { name: 'MountainIcon', component: MountainIcon },
    { name: 'CompassIcon', component: CompassIcon },
    { name: 'TentIcon', component: TentIcon },
    { name: 'FootprintsIcon', component: FootprintsIcon },
    { name: 'MapPinIcon', component: MapPinIcon },
    { name: 'LayersIcon', component: LayersIcon },
    { name: 'LocateIcon', component: LocateIcon },
    { name: 'RouteIcon', component: RouteIcon },
    { name: 'TreePineIcon', component: TreePineIcon },
    { name: 'BinocularsIcon', component: BinocularsIcon },
  ],
};

const IconsComponent = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState(24);

  const copyImport = async (iconName: string) => {
    const importStatement = `import { ${iconName} } from '@designsystem/core';`;
    await navigator.clipboard.writeText(importStatement);
    setCopied(iconName);
    setTimeout(() => setCopied(null), 2000);
  };

  const totalIcons = Object.values(iconCategories).flat().length;

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 600 }}>Ikonbibliotek</h2>
        <p style={{ margin: '0 0 1rem', color: 'var(--color-muted-foreground)' }}>
          {totalIcons} selvhostede ikoner. GDPR-kompatible - ingen eksterne avhengigheter.
        </p>
        <p
          style={{
            margin: '0 0 1.5rem',
            padding: '0.75rem 1rem',
            background: 'var(--color-muted)',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.875rem',
          }}
        >
          SVG-paths fra{' '}
          <a
            href="https://lucide.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-accent)' }}
          >
            Lucide
          </a>{' '}
          (MIT-lisens), kopiert og hostet lokalt som React-komponenter.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(Number(e.target.value))}
            style={{
              padding: '0.75rem 1rem',
              fontSize: '1rem',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-background)',
            }}
          >
            <option value={16}>16px</option>
            <option value={20}>20px</option>
            <option value={24}>24px (standard)</option>
            <option value={32}>32px</option>
            <option value={48}>48px</option>
          </select>
        </div>
      </div>

      {Object.entries(iconCategories).map(([category, icons]) => (
        <section key={category} style={{ marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 1rem', fontSize: '1rem', fontWeight: 600 }}>{category}</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
              gap: '0.5rem',
            }}
          >
            {icons.map(({ name, component: IconComponent }) => (
              <button
                key={name}
                onClick={() => copyImport(name)}
                title={`Kopier: import { ${name} } from '@designsystem/core'`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 0.5rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  background:
                    copied === name ? 'var(--color-success-100)' : 'var(--color-background)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <IconComponent size={selectedSize} />
                <span
                  style={{
                    fontSize: '0.625rem',
                    color:
                      copied === name
                        ? 'var(--color-success-700)'
                        : 'var(--color-muted-foreground)',
                    textAlign: 'center',
                    wordBreak: 'break-all',
                  }}
                >
                  {copied === name ? 'Kopiert!' : name.replace('Icon', '')}
                </span>
              </button>
            ))}
          </div>
        </section>
      ))}

      {/* Usage Guide */}
      <section
        style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'var(--color-muted)',
          borderRadius: 'var(--radius-lg)',
        }}
      >
        <h3 style={{ margin: '0 0 1rem', fontSize: '1rem', fontWeight: 600 }}>Bruk i kode</h3>
        <pre
          style={{
            margin: 0,
            padding: '1rem',
            background: 'var(--color-gray-900)',
            color: 'var(--color-gray-100)',
            borderRadius: 'var(--radius-md)',
            overflow: 'auto',
            fontSize: '0.875rem',
          }}
        >
          {`// Importer fra designsystemet (GDPR-kompatibelt)
import { MountainIcon, TentIcon, MapPinIcon } from '@designsystem/core';

// Bruk i komponenter
<MountainIcon size={24} />
<TentIcon size={20} color="var(--color-accent)" />
<MapPinIcon size={16} strokeWidth={2} />

// Med Button-komponent
<Button>
  <MountainIcon size={16} />
  Start tur
</Button>

// Alle ikoner støtter standard SVG-props
<CompassIcon
  size={32}
  stroke="currentColor"
  strokeWidth={1.5}
  className="my-custom-class"
/>`}
        </pre>
      </section>

      {/* GDPR Notice */}
      <section
        style={{
          marginTop: '2rem',
          padding: '1rem 1.5rem',
          background: 'var(--color-success-50)',
          border: '1px solid var(--color-success-200)',
          borderRadius: 'var(--radius-lg)',
        }}
      >
        <h4 style={{ margin: '0 0 0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
          GDPR-kompatibelt
        </h4>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-success-800)' }}>
          Alle ikoner er selvhostet som React-komponenter med inline SVG. Ingen eksterne fonter,
          CDN-er eller tracking. Trygt for bruk i norske offentlige apper.
        </p>
      </section>
    </div>
  );
};

export const Ikoner: Story = {
  render: () => <IconsComponent />,
};
