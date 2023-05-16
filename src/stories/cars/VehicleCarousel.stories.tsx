import type { Meta, StoryObj } from '@storybook/react';

import VehicleCarousel from './VehicleCarousel';

const meta: Meta<typeof VehicleCarousel> = {
  component: VehicleCarousel,
  title: 'Vehicle Carousel',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
