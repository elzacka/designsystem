import type { Meta, StoryObj } from '@storybook/react';
import { useState, useMemo } from 'react';
import * as LucideIcons from 'lucide-react';

const meta = {
  title: 'Foundations/Ikoner',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Get all icon names (excluding non-icon exports)
const iconNames = Object.keys(LucideIcons).filter(
  (key) =>
    key !== 'createLucideIcon' &&
    key !== 'default' &&
    key !== 'icons' &&
    typeof (LucideIcons as Record<string, unknown>)[key] === 'function' &&
    /^[A-Z]/.test(key)
);

// Categorize icons
const categories: Record<string, string[]> = {
  Navigasjon: [
    'Home',
    'Menu',
    'ChevronLeft',
    'ChevronRight',
    'ChevronUp',
    'ChevronDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'ExternalLink',
    'Link',
    'CornerUpLeft',
    'CornerUpRight',
  ],
  Handlinger: [
    'Plus',
    'Minus',
    'X',
    'Check',
    'Edit',
    'Trash',
    'Copy',
    'Save',
    'Download',
    'Upload',
    'Share',
    'Send',
    'Refresh',
    'RotateCcw',
    'RotateCw',
  ],
  Kommunikasjon: [
    'Mail',
    'MessageCircle',
    'MessageSquare',
    'Phone',
    'Video',
    'Bell',
    'BellOff',
    'AtSign',
  ],
  Media: [
    'Image',
    'Camera',
    'Film',
    'Music',
    'Play',
    'Pause',
    'Square',
    'Volume',
    'VolumeX',
    'Mic',
    'MicOff',
  ],
  Filer: ['File', 'FileText', 'Folder', 'FolderOpen', 'Archive', 'Paperclip', 'Clipboard'],
  Bruker: [
    'User',
    'Users',
    'UserPlus',
    'UserMinus',
    'UserCheck',
    'UserX',
    'LogIn',
    'LogOut',
    'Settings',
    'Lock',
    'Unlock',
    'Key',
    'Shield',
  ],
  Varsler: ['AlertCircle', 'AlertTriangle', 'Info', 'HelpCircle', 'CheckCircle', 'XCircle'],
  Data: [
    'Search',
    'Filter',
    'SortAsc',
    'SortDesc',
    'BarChart',
    'PieChart',
    'TrendingUp',
    'TrendingDown',
    'Activity',
  ],
  Layout: [
    'Layout',
    'Grid',
    'List',
    'Columns',
    'Sidebar',
    'PanelLeft',
    'PanelRight',
    'Maximize',
    'Minimize',
  ],
  Diverse: [
    'Calendar',
    'Clock',
    'MapPin',
    'Globe',
    'Sun',
    'Moon',
    'Cloud',
    'Heart',
    'Star',
    'Bookmark',
    'Tag',
    'Hash',
    'Code',
    'Terminal',
    'Zap',
  ],
};

const IconsComponent = () => {
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState(24);

  const copyImport = async (iconName: string) => {
    const importStatement = `import { ${iconName} } from 'lucide-react';`;
    await navigator.clipboard.writeText(importStatement);
    setCopied(iconName);
    setTimeout(() => setCopied(null), 2000);
  };

  const filteredCategories = useMemo(() => {
    if (!search) return categories;

    const searchLower = search.toLowerCase();
    const filtered: Record<string, string[]> = {};

    Object.entries(categories).forEach(([category, icons]) => {
      const matchingIcons = icons.filter((icon) => icon.toLowerCase().includes(searchLower));
      if (matchingIcons.length > 0) {
        filtered[category] = matchingIcons;
      }
    });

    return filtered;
  }, [search]);

  const renderIcon = (iconName: string) => {
    const IconComponent = (
      LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number }>>
    )[iconName];
    if (!IconComponent) return null;
    return <IconComponent size={selectedSize} />;
  };

  const totalIcons = Object.values(filteredCategories).flat().length;

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 600 }}>Ikonbibliotek</h2>
        <p style={{ margin: '0 0 1.5rem', color: 'var(--color-muted-foreground)' }}>
          {iconNames.length}+ ikoner fra Lucide. Klikk på et ikon for å kopiere import-statement.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <input
            type="search"
            placeholder="Søk etter ikoner..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: '1 1 300px',
              padding: '0.75rem 1rem',
              fontSize: '1rem',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-background)',
              color: 'var(--color-foreground)',
            }}
          />
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

        {search && (
          <p style={{ fontSize: '0.875rem', color: 'var(--color-muted-foreground)' }}>
            {totalIcons} treff for &quot;{search}&quot;
          </p>
        )}
      </div>

      {Object.entries(filteredCategories).map(([category, icons]) => (
        <section key={category} style={{ marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 1rem', fontSize: '1rem', fontWeight: 600 }}>{category}</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
              gap: '0.5rem',
            }}
          >
            {icons.map((iconName) => (
              <button
                key={iconName}
                onClick={() => copyImport(iconName)}
                title={`Kopier: import { ${iconName} } from 'lucide-react'`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 0.5rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  background:
                    copied === iconName ? 'var(--color-success-100)' : 'var(--color-background)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {renderIcon(iconName)}
                <span
                  style={{
                    fontSize: '0.625rem',
                    color:
                      copied === iconName
                        ? 'var(--color-success-700)'
                        : 'var(--color-muted-foreground)',
                    textAlign: 'center',
                    wordBreak: 'break-all',
                  }}
                >
                  {copied === iconName ? 'Kopiert!' : iconName}
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
          {`// Importer enkeltikoner (tree-shakable)
import { Home, User, Settings } from 'lucide-react';

// Bruk i komponenter
<Home size={24} />
<User size={20} color="var(--color-primary-500)" />
<Settings size={16} strokeWidth={2} />

// Med Button-komponent
<Button>
  <Home size={16} />
  Hjem
</Button>`}
        </pre>
      </section>
    </div>
  );
};

export const Ikoner: Story = {
  render: () => <IconsComponent />,
};
