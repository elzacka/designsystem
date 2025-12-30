import type { Meta, StoryObj } from '@storybook/react';
import { DescriptionList, DescriptionTerm, DescriptionDetails } from '@designsystem/core';

const meta: Meta<typeof DescriptionList> = {
  title: 'Komponenter/DescriptionList',
  component: DescriptionList,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DescriptionList>
      <DescriptionTerm>Navn</DescriptionTerm>
      <DescriptionDetails>Ola Nordmann</DescriptionDetails>
      <DescriptionTerm>E-post</DescriptionTerm>
      <DescriptionDetails>ola@example.com</DescriptionDetails>
      <DescriptionTerm>Telefon</DescriptionTerm>
      <DescriptionDetails>+47 123 45 678</DescriptionDetails>
    </DescriptionList>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <DescriptionList horizontal>
      <DescriptionTerm>Ordrenummer</DescriptionTerm>
      <DescriptionDetails>#12345</DescriptionDetails>
      <DescriptionTerm>Dato</DescriptionTerm>
      <DescriptionDetails>25. desember 2025</DescriptionDetails>
      <DescriptionTerm>Status</DescriptionTerm>
      <DescriptionDetails>Sendt</DescriptionDetails>
      <DescriptionTerm>Total</DescriptionTerm>
      <DescriptionDetails>kr 1 234,00</DescriptionDetails>
    </DescriptionList>
  ),
};
