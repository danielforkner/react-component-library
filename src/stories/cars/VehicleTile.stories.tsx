import type { Meta, StoryObj } from '@storybook/react';

import VehicleTile from './VehicleTile';

const meta: Meta<typeof VehicleTile> = {
  component: VehicleTile,
  title: 'Vehicle Tile',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'select',
      },
      options: [
        'Sedans',
        'Crossovers',
        'Coupes',
        'Crossovers',
        'Diesel',
        'Trucks',
        'SUVs',
        'Sports Cars',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Sedans',
  },
};
