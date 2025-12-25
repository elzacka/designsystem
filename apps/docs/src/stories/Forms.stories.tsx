import type { Meta, StoryObj } from '@storybook/react';
import { Input, Textarea, Select, Checkbox, Radio, Switch, VStack, HStack } from '@designsystem/core';

export default {
  title: 'Forms/Inputs',
} satisfies Meta;

export const InputVariants: StoryObj = {
  name: 'Input',
  render: () => (
    <VStack gap={4} style={{ maxWidth: '400px' }}>
      <Input label="Navn" placeholder="Skriv inn navn" />
      <Input label="E-post" type="email" description="Vi deler aldri e-posten din" />
      <Input label="Med feil" error="Dette feltet er påkrevd" />
      <Input label="Deaktivert" disabled value="Kan ikke endres" />
      <Input label="Små" size="sm" placeholder="Liten input" />
      <Input label="Stor" size="lg" placeholder="Stor input" />
    </VStack>
  ),
};

export const TextareaVariants: StoryObj = {
  name: 'Textarea',
  render: () => (
    <VStack gap={4} style={{ maxWidth: '400px' }}>
      <Textarea label="Beskrivelse" placeholder="Skriv en beskrivelse..." />
      <Textarea label="Med feil" error="Minimum 10 tegn" />
      <Textarea label="Ikke skalerbar" resize="none" />
    </VStack>
  ),
};

export const SelectVariants: StoryObj = {
  name: 'Select',
  render: () => (
    <VStack gap={4} style={{ maxWidth: '400px' }}>
      <Select label="Velg land" placeholder="Velg et land">
        <option value="no">Norge</option>
        <option value="se">Sverige</option>
        <option value="dk">Danmark</option>
      </Select>
      <Select label="Med feil" error="Vennligst velg et alternativ">
        <option value="">Velg...</option>
      </Select>
    </VStack>
  ),
};

export const CheckboxVariants: StoryObj = {
  name: 'Checkbox',
  render: () => (
    <VStack gap={3}>
      <Checkbox label="Godta vilkår" />
      <Checkbox label="Med beskrivelse" description="Ekstra informasjon her" />
      <Checkbox label="Avkrysset" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Deaktivert" disabled />
      <Checkbox label="Med feil" error="Du må godta vilkårene" />
    </VStack>
  ),
};

export const RadioVariants: StoryObj = {
  name: 'Radio',
  render: () => (
    <VStack gap={3}>
      <Radio name="option" label="Alternativ 1" value="1" />
      <Radio name="option" label="Alternativ 2" value="2" />
      <Radio name="option" label="Alternativ 3" value="3" disabled />
    </VStack>
  ),
};

export const SwitchVariants: StoryObj = {
  name: 'Switch',
  render: () => (
    <VStack gap={3}>
      <Switch label="Aktivert" />
      <Switch label="Med beskrivelse" description="Slå på for å motta varsler" />
      <Switch label="Etikett til venstre" labelPosition="left" />
      <Switch label="Liten" size="sm" />
      <Switch label="Stor" size="lg" />
      <Switch label="Deaktivert" disabled />
    </VStack>
  ),
};
