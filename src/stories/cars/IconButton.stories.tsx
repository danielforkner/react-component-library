import type { Meta, StoryObj } from '@storybook/react';

import IconButton from './IconButton';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'Icon Button',
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
