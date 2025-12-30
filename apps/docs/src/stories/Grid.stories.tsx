import type { Meta, StoryObj } from '@storybook/react';
import { Box, Grid, GridItem, VStack, Text } from '@designsystem/core';

const meta: Meta<typeof Grid> = {
  title: 'Komponenter/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
