import type { Meta, StoryObj } from '@storybook/react';

import IconButton from './IconButton';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'Icon Button',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
