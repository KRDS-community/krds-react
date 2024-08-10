import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Spinner } from '../../packages/core/lib';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['x-small', 'small', 'medium', 'large', 'x-large'],
      },
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    size: 'medium',
    color: 'primary',
  },
};

export const SuccessColors: Story = {
  args: {
    size: 'medium',
    color: 'success',
  },
};

export const xSmall: Story = {
  args: {
    size: 'x-small',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const xLarge: Story = {
  args: {
    size: 'x-large',
  },
};
