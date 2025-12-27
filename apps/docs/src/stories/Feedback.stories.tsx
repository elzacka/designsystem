import type { Meta, StoryObj } from '@storybook/react';
import {
  Alert,
  Badge,
  Tag,
  Avatar,
  Skeleton,
  ProgressBar,
  VStack,
  HStack,
} from '@designsystem/core';

export default {
  title: 'Komponenter/Tilbakemelding/Status',
} satisfies Meta;

export const AlertVariants: StoryObj = {
  name: 'Alert',
  render: () => (
    <VStack gap={4}>
      <Alert variant="info" title="Informasjon">
        Dette er en informasjonsmelding.
      </Alert>
      <Alert variant="success" title="Suksess">
        Handlingen ble fullført.
      </Alert>
      <Alert variant="warning" title="Advarsel">
        Vær oppmerksom på dette.
      </Alert>
      <Alert variant="error" title="Feil">
        Noe gikk galt.
      </Alert>
      <Alert variant="info" dismissible onDismiss={() => {}}>
        Denne kan lukkes.
      </Alert>
    </VStack>
  ),
};

export const BadgeVariants: StoryObj = {
  name: 'Badge',
  render: () => (
    <VStack gap={4}>
      <HStack gap={2}>
        <Badge>Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
      </HStack>
      <HStack gap={2}>
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </HStack>
      <HStack gap={2}>
        <Badge variant="success" dot>
          Online
        </Badge>
        <Badge variant="error" dot>
          Offline
        </Badge>
      </HStack>
    </VStack>
  ),
};

export const TagVariants: StoryObj = {
  name: 'Tag',
  render: () => (
    <VStack gap={4}>
      <HStack gap={2}>
        <Tag>Default</Tag>
        <Tag variant="primary">Primary</Tag>
        <Tag variant="success">Success</Tag>
        <Tag variant="warning">Warning</Tag>
        <Tag variant="error">Error</Tag>
      </HStack>
      <HStack gap={2}>
        <Tag removable onRemove={() => {}}>
          Removable
        </Tag>
        <Tag variant="primary" removable onRemove={() => {}}>
          React
        </Tag>
        <Tag variant="success" removable onRemove={() => {}}>
          TypeScript
        </Tag>
      </HStack>
    </VStack>
  ),
};

export const AvatarVariants: StoryObj = {
  name: 'Avatar',
  render: () => (
    <HStack gap={3}>
      <Avatar size="xs" name="Ola Nordmann" />
      <Avatar size="sm" name="Kari Hansen" />
      <Avatar size="md" name="Per Olsen" />
      <Avatar size="lg" name="Lisa Berg" />
      <Avatar size="xl" name="Erik Dahl" />
    </HStack>
  ),
};

export const SkeletonVariants: StoryObj = {
  name: 'Skeleton',
  render: () => (
    <VStack gap={4} style={{ maxWidth: '400px' }}>
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="60%" />
      <HStack gap={3}>
        <Skeleton variant="circular" width={48} height={48} />
        <VStack gap={2} style={{ flex: 1 }}>
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </VStack>
      </HStack>
      <Skeleton variant="rectangular" width="100%" height={120} />
    </VStack>
  ),
};

export const ProgressBarVariants: StoryObj = {
  name: 'ProgressBar',
  render: () => (
    <VStack gap={4} style={{ maxWidth: '400px' }}>
      <ProgressBar value={25} label="Fremdrift" showValue />
      <ProgressBar value={50} variant="success" />
      <ProgressBar value={75} variant="warning" size="lg" />
      <ProgressBar value={90} variant="error" size="sm" />
      <ProgressBar indeterminate label="Laster..." />
    </VStack>
  ),
};
