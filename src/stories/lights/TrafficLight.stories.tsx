import type { Meta, StoryObj } from '@storybook/react';

import TrafficLight from './TrafficLight';

const meta: Meta<typeof TrafficLight> = {
  component: TrafficLight,
  title: 'TrafficLight',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['red', 'yellow', 'green'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Stop
 */
export const Red: Story = {
  args: {
    variant: 'red',
  },
};

/**
 * Prepare to Stop
 */
export const Yellow: Story = {
  args: {
    variant: 'yellow',
  },
};

/**
 * GO
 */
export const Default: Story = {};
