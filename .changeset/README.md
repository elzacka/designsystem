# Changesets

Changesets brukes for versjonshåndtering og changelog-generering.

## Bruk

Når du gjør endringer som påvirker brukere av pakkene:

```bash
pnpm changeset
```

Dette vil:

1. Spørre hvilke pakker som er endret
2. Spørre om det er major/minor/patch endring
3. Be om en beskrivelse av endringen

## Versjonering

For å oppdatere versjoner basert på changesets:

```bash
pnpm changeset version
```

## Publisering

For å publisere til npm:

```bash
pnpm changeset publish
```
