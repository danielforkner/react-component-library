import type { Meta, StoryObj } from '@storybook/react';

import VehicleTile from './VehicleTile';

const meta: Meta<typeof VehicleTile> = {
  component: VehicleTile,
  title: 'Vehicle Tile',
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
        'Diesel Engines',
        'Pickup Trucks',
        'Sport Utilities',
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
