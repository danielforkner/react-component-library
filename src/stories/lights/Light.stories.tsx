import type { Meta, StoryObj } from '@storybook/react';

import Light from './Light';

const meta: Meta<typeof Light> = {
  component: Light,
  title: 'Light',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['green', 'yellow', 'red'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Generally means stop
 */
export const Red: Story = {
  args: {
    variant: 'red',
  },
};

/**
 * Generally means prepare to stop
 */
export const Yellow: Story = {
  args: {
    variant: 'yellow',
  },
};

/**
 * Generally means GO
 */
export const Default: Story = {};
