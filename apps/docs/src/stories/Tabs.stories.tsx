import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, Tab, TabPanel } from '@designsystem/core';

const meta: Meta<typeof Tabs> = {
  title: 'Komponenter/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <Tab value="tab1">Oversikt</Tab>
        <Tab value="tab2">Innstillinger</Tab>
        <Tab value="tab3">Varsler</Tab>
      </TabsList>
      <TabPanel value="tab1">
        <p>Innhold for oversikt-fanen.</p>
      </TabPanel>
      <TabPanel value="tab2">
        <p>Innhold for innstillinger-fanen.</p>
      </TabPanel>
      <TabPanel value="tab3">
        <p>Innhold for varsler-fanen.</p>
      </TabPanel>
    </Tabs>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <Tab value="tab1">Aktiv</Tab>
        <Tab value="tab2" disabled>
          Deaktivert
        </Tab>
        <Tab value="tab3">Tilgjengelig</Tab>
      </TabsList>
      <TabPanel value="tab1">
        <p>Første fane er valgt.</p>
      </TabPanel>
      <TabPanel value="tab2">
        <p>Denne fanen er deaktivert.</p>
      </TabPanel>
      <TabPanel value="tab3">
        <p>Tredje fane.</p>
      </TabPanel>
    </Tabs>
  ),
};
