import type { Meta, StoryObj } from '@storybook/react';

import TrafficLight from './TrafficLight';

const meta: Meta<typeof TrafficLight> = {
  component: TrafficLight,
  title: 'TrafficLight',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Yellow: Story = {
  args: {
    variant: 'yellow',
  },
};
export const Red: Story = {
  args: {
    variant: 'red',
  },
};
