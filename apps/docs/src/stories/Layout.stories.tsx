import type { Meta, StoryObj } from '@storybook/react';
import { Box, HStack, VStack, Grid, GridItem, Text } from '@designsystem/core';

export default {
  title: 'Layout/Containers',
} satisfies Meta;

export const BoxVariants: StoryObj = {
  name: 'Box',
  render: () => (
    <VStack gap={4}>
      <Box padding={4} background="subtle" radius="md">
        <Text>Subtle background with padding</Text>
      </Box>
      <Box padding={4} background="raised" radius="lg">
        <Text>Raised background (with shadow)</Text>
      </Box>
      <Box padding={4} border radius="md">
        <Text>With border</Text>
      </Box>
      <Box paddingX={6} paddingY={3} background="surface" radius="xl">
        <Text>Custom padding X and Y</Text>
      </Box>
    </VStack>
  ),
};

export const StackExamples: StoryObj = {
  name: 'Stack',
  render: () => (
    <VStack gap={6}>
      <div>
        <Text variant="label-md">HStack (horizontal)</Text>
        <HStack gap={3} style={{ marginTop: '0.5rem' }}>
          <Box padding={3} background="subtle" radius="md">
            <Text>1</Text>
          </Box>
          <Box padding={3} background="subtle" radius="md">
            <Text>2</Text>
          </Box>
          <Box padding={3} background="subtle" radius="md">
            <Text>3</Text>
          </Box>
        </HStack>
      </div>
      <div>
        <Text variant="label-md">VStack (vertical)</Text>
        <VStack gap={2} align="start" style={{ marginTop: '0.5rem' }}>
          <Box padding={3} background="subtle" radius="md">
            <Text>Item 1</Text>
          </Box>
          <Box padding={3} background="subtle" radius="md">
            <Text>Item 2</Text>
          </Box>
          <Box padding={3} background="subtle" radius="md">
            <Text>Item 3</Text>
          </Box>
        </VStack>
      </div>
      <div>
        <Text variant="label-md">HStack with justify="between"</Text>
        <HStack gap={3} justify="between" style={{ marginTop: '0.5rem' }}>
          <Box padding={3} background="subtle" radius="md">
            <Text>Left</Text>
          </Box>
          <Box padding={3} background="subtle" radius="md">
            <Text>Right</Text>
          </Box>
        </HStack>
      </div>
    </VStack>
  ),
};

export const GridExamples: StoryObj = {
  name: 'Grid',
  render: () => (
    <VStack gap={6}>
      <div>
        <Text variant="label-md">3-column grid</Text>
        <Grid columns={3} gap={4} style={{ marginTop: '0.5rem' }}>
          <Box padding={4} background="subtle" radius="md">
            <Text>1</Text>
          </Box>
          <Box padding={4} background="subtle" radius="md">
            <Text>2</Text>
          </Box>
          <Box padding={4} background="subtle" radius="md">
            <Text>3</Text>
          </Box>
          <Box padding={4} background="subtle" radius="md">
            <Text>4</Text>
          </Box>
          <Box padding={4} background="subtle" radius="md">
            <Text>5</Text>
          </Box>
          <Box padding={4} background="subtle" radius="md">
            <Text>6</Text>
          </Box>
        </Grid>
      </div>
      <div>
        <Text variant="label-md">Grid with spanning items</Text>
        <Grid columns={4} gap={4} style={{ marginTop: '0.5rem' }}>
          <GridItem span={2}>
            <Box padding={4} background="subtle" radius="md">
              <Text>Span 2</Text>
            </Box>
          </GridItem>
          <Box padding={4} background="subtle" radius="md">
            <Text>1</Text>
          </Box>
          <Box padding={4} background="subtle" radius="md">
            <Text>1</Text>
          </Box>
          <GridItem span="full">
            <Box padding={4} background="subtle" radius="md">
              <Text>Full width</Text>
            </Box>
          </GridItem>
        </Grid>
      </div>
    </VStack>
  ),
};
