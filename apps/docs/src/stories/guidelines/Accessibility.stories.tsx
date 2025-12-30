import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Button,
  Input,
  Text,
  Heading,
  VStack,
  HStack,
  Box,
  Alert,
  Checkbox,
  Link,
} from '@designsystem/core';
import { Check, X, AlertCircle, Info, Eye, EyeOff, Keyboard, Volume2 } from 'lucide-react';

const meta = {
  title: 'Guidelines/Tilgjengelighet',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ========================================
// Overview
// ========================================
const OverviewComponent = () => (
  <div style={{ maxWidth: '800px' }}>
    <VStack gap={6}>
      <div>
        <Heading as="h1" size="xl">
          Tilgjengelighet (WCAG 2.2)
        </Heading>
        <Text variant="body-lg" style={{ color: 'var(--color-muted-foreground)' }}>
          Denne guiden hjelper deg å bygge tilgjengelige applikasjoner som alle kan bruke.
        </Text>
      </div>

      <Alert variant="info">
        <strong>Krav:</strong> Alle offentlige norske nettsteder må oppfylle WCAG 2.1 AA. Vi
        anbefaler å følge WCAG 2.2 AA for beste praksis.
      </Alert>

      {/* Key principles */}
      <section>
        <Heading as="h2" size="xl" style={{ marginBottom: 'var(--space-4)' }}>
          De fire prinsippene (POUR)
        </Heading>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-4)',
          }}
        >
          {[
            {
              title: 'Mulig å oppfatte',
              desc: 'Innhold må kunne oppfattes gjennom syn, hørsel eller berøring.',
              icon: Eye,
            },
            {
              title: 'Mulig å betjene',
              desc: 'Alle funksjoner må kunne brukes med tastatur.',
              icon: Keyboard,
            },
            {
              title: 'Forståelig',
              desc: 'Innhold og navigasjon må være intuitivt og konsistent.',
              icon: Info,
            },
            {
              title: 'Robust',
              desc: 'Fungerer med hjelpemidler og fremtidige teknologier.',
              icon: Volume2,
            },
          ].map((principle) => (
            <Box key={principle.title} padding={5} background="subtle" radius="lg">
              <principle.icon
                size={24}
                style={{ color: 'var(--color-primary-500)', marginBottom: 'var(--space-3)' }}
              />
              <Heading as="h3" size="md" style={{ marginBottom: 'var(--space-2)' }}>
                {principle.title}
              </Heading>
              <Text variant="body-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                {principle.desc}
              </Text>
            </Box>
          ))}
        </div>
      </section>

      {/* Checklist */}
      <section>
        <Heading as="h2" size="xl" style={{ marginBottom: 'var(--space-4)' }}>
          Sjekkliste for utviklere
        </Heading>
        <Box padding={5} background="default" radius="lg" border>
          <VStack gap={3}>
            {[
              'Alle bilder har beskrivende alt-tekst',
              'Skjemafelt har tilknyttede labels',
              'Fargekontrast oppfyller AA-krav (4.5:1)',
              'Fokusrekkefølge er logisk',
              'Alle interaktive elementer kan nås med tastatur',
              'Feilmeldinger er tydelige og beskrivende',
              'Sidestruktur bruker semantisk HTML',
              'ARIA-attributter brukes korrekt',
            ].map((item, index) => (
              <Checkbox key={index} label={item} />
            ))}
          </VStack>
        </Box>
      </section>
    </VStack>
  </div>
);

export const Oversikt: Story = {
  render: () => <OverviewComponent />,
};

// ========================================
// Color Contrast
// ========================================
const ColorContrastComponent = () => {
  const contrastExamples = [
    {
      bg: 'var(--color-background)',
      text: 'var(--color-foreground)',
      ratio: '16:1',
      pass: true,
      label: 'Normal tekst',
    },
    {
      bg: 'var(--color-muted)',
      text: 'var(--color-muted-foreground)',
      ratio: '4.6:1',
      pass: true,
      label: 'Dempet tekst',
    },
    {
      bg: 'var(--color-primary-500)',
      text: 'var(--color-white)',
      ratio: '4.5:1',
      pass: true,
      label: 'Primærknapp',
    },
    {
      bg: 'var(--color-gray-200)',
      text: 'var(--color-gray-400)',
      ratio: '2.1:1',
      pass: false,
      label: 'For lav kontrast',
    },
  ];

  return (
    <div style={{ maxWidth: '800px' }}>
      <VStack gap={6}>
        <div>
          <Heading as="h2" size="xl">
            Fargekontrast
          </Heading>
          <Text style={{ color: 'var(--color-muted-foreground)' }}>
            WCAG 2.2 krever minimum 4.5:1 kontrast for normal tekst og 3:1 for stor tekst (18px+
            bold eller 24px+).
          </Text>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-4)',
          }}
        >
          {contrastExamples.map((example) => (
            <Box
              key={example.label}
              padding={5}
              radius="lg"
              border
              style={{ background: example.bg }}
            >
              <Text style={{ color: example.text, marginBottom: 'var(--space-3)' }}>
                {example.label}
              </Text>
              <HStack gap={2} align="center">
                {example.pass ? (
                  <Check size={16} style={{ color: 'var(--color-success-500)' }} />
                ) : (
                  <X size={16} style={{ color: 'var(--color-error-500)' }} />
                )}
                <Text variant="body-sm" style={{ color: example.text }}>
                  {example.ratio} {example.pass ? '(OK)' : '(Feiler)'}
                </Text>
              </HStack>
            </Box>
          ))}
        </div>

        <Alert variant="warning">
          <strong>Tips:</strong> Ikke bruk farge alene for å formidle informasjon. Kombiner med
          ikoner, tekst eller mønstre.
        </Alert>

        {/* Color-blind safe example */}
        <section>
          <Heading as="h3" size="lg" style={{ marginBottom: 'var(--space-3)' }}>
            Fargeblindsikkert design
          </Heading>
          <HStack gap={4}>
            <Box padding={4} background="default" radius="md" border>
              <HStack gap={2}>
                <Check size={16} style={{ color: 'var(--color-success-500)' }} />
                <Text style={{ color: 'var(--color-success-600)' }}>Godkjent</Text>
              </HStack>
            </Box>
            <Box padding={4} background="default" radius="md" border>
              <HStack gap={2}>
                <X size={16} style={{ color: 'var(--color-error-500)' }} />
                <Text style={{ color: 'var(--color-error-600)' }}>Avvist</Text>
              </HStack>
            </Box>
            <Box padding={4} background="default" radius="md" border>
              <HStack gap={2}>
                <AlertCircle size={16} style={{ color: 'var(--color-warning-500)' }} />
                <Text style={{ color: 'var(--color-warning-600)' }}>Advarsel</Text>
              </HStack>
            </Box>
          </HStack>
          <Text
            variant="body-sm"
            style={{ marginTop: 'var(--space-2)', color: 'var(--color-muted-foreground)' }}
          >
            Ikoner og tekst sikrer at informasjonen er tilgjengelig uavhengig av fargesyn.
          </Text>
        </section>
      </VStack>
    </div>
  );
};

export const Fargekontrast: Story = {
  render: () => <ColorContrastComponent />,
};

// ========================================
// Keyboard Navigation
// ========================================
const KeyboardNavigationComponent = () => {
  const [focusedItem, setFocusedItem] = useState<number | null>(null);

  const shortcuts = [
    { key: 'Tab', desc: 'Gå til neste interaktive element' },
    { key: 'Shift + Tab', desc: 'Gå til forrige interaktive element' },
    { key: 'Enter', desc: 'Aktiver knapp eller lenke' },
    { key: 'Space', desc: 'Aktiver knapp, toggle checkbox/switch' },
    { key: 'Escape', desc: 'Lukk modal/dropdown' },
    { key: 'Arrow keys', desc: 'Naviger i lister, tabs, menyer' },
  ];

  return (
    <div style={{ maxWidth: '800px' }}>
      <VStack gap={6}>
        <div>
          <Heading as="h2" size="xl">
            Tastaturnavigasjon
          </Heading>
          <Text style={{ color: 'var(--color-muted-foreground)' }}>
            Alle interaktive elementer må kunne nås og brukes med tastatur.
          </Text>
        </div>

        {/* Keyboard shortcuts */}
        <section>
          <Heading as="h3" size="lg" style={{ marginBottom: 'var(--space-3)' }}>
            Standard hurtigtaster
          </Heading>
          <Box padding={0} background="default" radius="lg" border>
            {shortcuts.map((shortcut, index) => (
              <HStack
                key={shortcut.key}
                justify="between"
                style={{
                  padding: 'var(--space-4)',
                  borderBottom:
                    index < shortcuts.length - 1 ? '1px solid var(--color-border)' : 'none',
                }}
              >
                <code
                  style={{
                    padding: 'var(--space-1) var(--space-2)',
                    background: 'var(--color-muted)',
                    borderRadius: 'var(--radius-sm)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                  }}
                >
                  {shortcut.key}
                </code>
                <Text>{shortcut.desc}</Text>
              </HStack>
            ))}
          </Box>
        </section>

        {/* Focus indicator demo */}
        <section>
          <Heading as="h3" size="lg" style={{ marginBottom: 'var(--space-3)' }}>
            Fokusindikator
          </Heading>
          <Text style={{ marginBottom: 'var(--space-4)', color: 'var(--color-muted-foreground)' }}>
            Bruk Tab for å navigere mellom knappene. Fokus skal være tydelig synlig.
          </Text>
          <HStack gap={3}>
            {[1, 2, 3, 4].map((i) => (
              <Button
                key={i}
                variant={focusedItem === i ? 'primary' : 'outline'}
                onFocus={() => setFocusedItem(i)}
                onBlur={() => setFocusedItem(null)}
              >
                Knapp {i}
              </Button>
            ))}
          </HStack>
          {focusedItem && (
            <Text
              variant="body-sm"
              style={{ marginTop: 'var(--space-2)', color: 'var(--color-primary-500)' }}
            >
              Fokus på: Knapp {focusedItem}
            </Text>
          )}
        </section>

        {/* Skip link */}
        <section>
          <Heading as="h3" size="lg" style={{ marginBottom: 'var(--space-3)' }}>
            Skip-lenke
          </Heading>
          <Text style={{ marginBottom: 'var(--space-4)', color: 'var(--color-muted-foreground)' }}>
            Bruk SkipLink-komponenten for å la brukere hoppe over repeterende innhold.
          </Text>
          <Box padding={5} background="subtle" radius="lg">
            <pre
              style={{
                margin: 0,
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                overflow: 'auto',
              }}
            >
              {`import { SkipLink } from '@designsystem/core';

// Plasser først i body
<SkipLink href="#main-content">
  Hopp til hovedinnhold
</SkipLink>

// Mål-element
<main id="main-content">
  ...
</main>`}
            </pre>
          </Box>
        </section>
      </VStack>
    </div>
  );
};

export const Tastaturnavigasjon: Story = {
  render: () => <KeyboardNavigationComponent />,
};

// ========================================
// Form Accessibility
// ========================================
const FormAccessibilityComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ maxWidth: '800px' }}>
      <VStack gap={6}>
        <div>
          <Heading as="h2" size="xl">
            Tilgjengelige skjemaer
          </Heading>
          <Text style={{ color: 'var(--color-muted-foreground)' }}>
            Skjemaer må være enkle å forstå og utfylle for alle brukere.
          </Text>
        </div>

        {/* Labels */}
        <section>
          <Heading as="h3" size="lg" style={{ marginBottom: 'var(--space-3)' }}>
            1. Alltid bruk labels
          </Heading>
          <HStack gap={6}>
            <VStack gap={2} style={{ flex: 1 }}>
              <HStack gap={2}>
                <X size={16} style={{ color: 'var(--color-error-500)' }} />
                <Text variant="body-sm" weight="medium" style={{ color: 'var(--color-error-600)' }}>
                  Feil
                </Text>
              </HStack>
              <input
                type="email"
                placeholder="E-post"
                style={{
                  padding: 'var(--space-3)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  width: '100%',
                }}
              />
              <Text variant="body-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                Placeholder er ikke en erstatning for label
              </Text>
            </VStack>
            <VStack gap={2} style={{ flex: 1 }}>
              <HStack gap={2}>
                <Check size={16} style={{ color: 'var(--color-success-500)' }} />
                <Text
                  variant="body-sm"
                  weight="medium"
                  style={{ color: 'var(--color-success-600)' }}
                >
                  Riktig
                </Text>
              </HStack>
              <Input label="E-post" type="email" placeholder="din@epost.no" />
            </VStack>
          </HStack>
        </section>

        {/* Error messages */}
        <section>
          <Heading as="h3" size="lg" style={{ marginBottom: 'var(--space-3)' }}>
            2. Tydelige feilmeldinger
          </Heading>
          <HStack gap={6}>
            <VStack gap={2} style={{ flex: 1 }}>
              <HStack gap={2}>
                <X size={16} style={{ color: 'var(--color-error-500)' }} />
                <Text variant="body-sm" weight="medium" style={{ color: 'var(--color-error-600)' }}>
                  Feil
                </Text>
              </HStack>
              <Input label="Passord" type="password" error="Feil" />
            </VStack>
            <VStack gap={2} style={{ flex: 1 }}>
              <HStack gap={2}>
                <Check size={16} style={{ color: 'var(--color-success-500)' }} />
                <Text
                  variant="body-sm"
                  weight="medium"
                  style={{ color: 'var(--color-success-600)' }}
                >
                  Riktig
                </Text>
              </HStack>
              <Input
                label="Passord"
                type="password"
                error="Passord må inneholde minst 8 tegn, inkludert tall og store bokstaver"
              />
            </VStack>
          </HStack>
        </section>

        {/* Required fields */}
        <section>
          <Heading as="h3" size="lg" style={{ marginBottom: 'var(--space-3)' }}>
            3. Merk påkrevde felt
          </Heading>
          <Box padding={5} background="default" radius="lg" border style={{ maxWidth: '400px' }}>
            <VStack gap={4}>
              <Input label="Navn" required />
              <Input label="Telefon (valgfritt)" />
            </VStack>
          </Box>
        </section>

        {/* Input assistance */}
        <section>
          <Heading as="h3" size="lg" style={{ marginBottom: 'var(--space-3)' }}>
            4. Gi hjelp og kontekst
          </Heading>
          <Box padding={5} background="default" radius="lg" border style={{ maxWidth: '400px' }}>
            <VStack gap={4}>
              <div>
                <Input label="Passord" type={showPassword ? 'text' : 'password'} />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ marginTop: 'var(--space-1)' }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  {showPassword ? 'Skjul' : 'Vis'} passord
                </Button>
              </div>
              <Input label="Fødselsdato" type="text" placeholder="DD.MM.ÅÅÅÅ" />
            </VStack>
          </Box>
        </section>
      </VStack>
    </div>
  );
};

export const Skjematilgjengelighet: Story = {
  render: () => <FormAccessibilityComponent />,
};

// ========================================
// ARIA Guide
// ========================================
const AriaGuideComponent = () => {
  const ariaExamples = [
    {
      title: 'aria-label',
      desc: 'Gir tilgjengelig navn til element uten synlig tekst',
      code: `<button aria-label="Lukk modal">
  <X />
</button>`,
    },
    {
      title: 'aria-describedby',
      desc: 'Kobler element til beskrivende tekst',
      code: `<input
  aria-describedby="password-hint"
/>
<p id="password-hint">
  Minst 8 tegn
</p>`,
    },
    {
      title: 'aria-live',
      desc: 'Annonserer dynamisk innhold til skjermlesere',
      code: `<div aria-live="polite">
  {statusMessage}
</div>`,
    },
    {
      title: 'aria-expanded',
      desc: 'Indikerer om et element er utvidet/kollapset',
      code: `<button
  aria-expanded={isOpen}
  aria-controls="menu"
>
  Meny
</button>`,
    },
    {
      title: 'role',
      desc: 'Definerer elementets funksjon for hjelpemidler',
      code: `<div role="alert">
  Feilmelding vises her
</div>`,
    },
  ];

  return (
    <div style={{ maxWidth: '900px' }}>
      <VStack gap={6}>
        <div>
          <Heading as="h2" size="xl">
            ARIA-attributter
          </Heading>
          <Text style={{ color: 'var(--color-muted-foreground)' }}>
            ARIA (Accessible Rich Internet Applications) forbedrer tilgjengeligheten for dynamisk
            innhold og egendefinerte widgets.
          </Text>
        </div>

        <Alert variant="warning">
          <strong>Første regel for ARIA:</strong> Ikke bruk ARIA hvis du kan oppnå det samme med
          native HTML. Bruk <code>&lt;button&gt;</code> i stedet for{' '}
          <code>&lt;div role=&quot;button&quot;&gt;</code>.
        </Alert>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: 'var(--space-4)',
          }}
        >
          {ariaExamples.map((example) => (
            <Box key={example.title} padding={5} background="default" radius="lg" border>
              <Heading as="h3" size="md" style={{ marginBottom: 'var(--space-2)' }}>
                <code style={{ fontFamily: 'var(--font-mono)' }}>{example.title}</code>
              </Heading>
              <Text
                variant="body-sm"
                style={{ marginBottom: 'var(--space-3)', color: 'var(--color-muted-foreground)' }}
              >
                {example.desc}
              </Text>
              <pre
                style={{
                  margin: 0,
                  padding: 'var(--space-3)',
                  background: 'var(--color-gray-900)',
                  color: 'var(--color-gray-100)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--text-xs)',
                  overflow: 'auto',
                }}
              >
                {example.code}
              </pre>
            </Box>
          ))}
        </div>

        {/* Common mistakes */}
        <section>
          <Heading as="h3" size="lg" style={{ marginBottom: 'var(--space-4)' }}>
            Vanlige feil å unngå
          </Heading>
          <VStack gap={3}>
            {[
              'Ikke bruk aria-hidden="true" på fokusbare elementer',
              'Ikke bruk role="button" på klikkbare div-er - bruk <button>',
              'Ikke la aria-label være tom string',
              'Ikke overbruk aria-live - kan bli støyende',
              'Ikke bruk kun aria-label for synlig tekst - skjermlesere kan ignorere visuell tekst',
            ].map((mistake, index) => (
              <HStack key={index} gap={2}>
                <X size={16} style={{ color: 'var(--color-error-500)', flexShrink: 0 }} />
                <Text variant="body-sm">{mistake}</Text>
              </HStack>
            ))}
          </VStack>
        </section>
      </VStack>
    </div>
  );
};

export const ARIAGuide: Story = {
  render: () => <AriaGuideComponent />,
};

// ========================================
// Testing Checklist
// ========================================
const TestingChecklistComponent = () => {
  const tests = [
    {
      category: 'Tastatur',
      items: [
        'Tab gjennom hele siden - ingen elementer hoppes over',
        'Fokusrekkefølge er logisk og forutsigbar',
        'Alle handlinger kan utføres med tastatur',
        'Fokusindikator er alltid synlig',
        'Ingen tastaturfeller (fokus kan ikke forlate et element)',
      ],
    },
    {
      category: 'Skjermleser',
      items: [
        'Sidestruktur er korrekt (overskriftshierarki)',
        'Bilder har beskrivende alt-tekst',
        'Skjemafelt har tilknyttede labels',
        'Dynamisk innhold annonseres (aria-live)',
        'Lenketekster er beskrivende (ikke "klikk her")',
      ],
    },
    {
      category: 'Visuelt',
      items: [
        'Tekst er lesbar ved 200% zoom',
        'Fargekontrast oppfyller AA-krav',
        'Innhold er forståelig uten farger',
        'Animasjoner kan stoppes (prefers-reduced-motion)',
        'Fokustilstander er tydelige',
      ],
    },
    {
      category: 'Verktøy',
      items: [
        'Lighthouse tilgjengelighetssjekk: 90+ score',
        'axe DevTools: ingen kritiske feil',
        'Wave: ingen alvorlige advarsler',
        'HTML-validering: ingen feil',
      ],
    },
  ];

  return (
    <div style={{ maxWidth: '900px' }}>
      <VStack gap={6}>
        <div>
          <Heading as="h2" size="xl">
            Testsjekkliste
          </Heading>
          <Text style={{ color: 'var(--color-muted-foreground)' }}>
            Bruk denne sjekklisten for å teste tilgjengeligheten i applikasjonen din.
          </Text>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-4)',
          }}
        >
          {tests.map((test) => (
            <Box key={test.category} padding={5} background="default" radius="lg" border>
              <Heading as="h3" size="md" style={{ marginBottom: 'var(--space-4)' }}>
                {test.category}
              </Heading>
              <VStack gap={2}>
                {test.items.map((item, index) => (
                  <Checkbox key={index} label={item} />
                ))}
              </VStack>
            </Box>
          ))}
        </div>

        {/* Testing tools */}
        <section>
          <Heading as="h3" size="lg" style={{ marginBottom: 'var(--space-4)' }}>
            Anbefalte verktøy
          </Heading>
          <Box padding={0} background="default" radius="lg" border>
            {[
              {
                name: 'axe DevTools',
                desc: 'Chrome/Firefox-utvidelse for automatisk testing',
                url: 'https://www.deque.com/axe/',
              },
              {
                name: 'Lighthouse',
                desc: 'Innebygd i Chrome DevTools',
                url: 'https://developer.chrome.com/docs/lighthouse/',
              },
              {
                name: 'WAVE',
                desc: 'Nettbasert og utvidelse for visuell evaluering',
                url: 'https://wave.webaim.org/',
              },
              {
                name: 'NVDA',
                desc: 'Gratis skjermleser for Windows',
                url: 'https://www.nvaccess.org/',
              },
              {
                name: 'VoiceOver',
                desc: 'Innebygd skjermleser på Mac/iOS',
                url: 'https://www.apple.com/accessibility/vision/',
              },
            ].map((tool, index) => (
              <HStack
                key={tool.name}
                justify="between"
                align="center"
                style={{
                  padding: 'var(--space-4)',
                  borderBottom: index < 4 ? '1px solid var(--color-border)' : 'none',
                }}
              >
                <div>
                  <Text weight="medium">{tool.name}</Text>
                  <Text variant="body-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                    {tool.desc}
                  </Text>
                </div>
                <Link href={tool.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm">
                    Åpne
                  </Button>
                </Link>
              </HStack>
            ))}
          </Box>
        </section>
      </VStack>
    </div>
  );
};

export const Testsjekkliste: Story = {
  render: () => <TestingChecklistComponent />,
};
