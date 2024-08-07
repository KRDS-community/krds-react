import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../packages/core/lib';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['x-small', 'small', 'medium', 'large', 'x-large'],
      },
    },
    color: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    size: 'medium',
    onClick: fn(),
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    size: 'medium',
    onClick: fn(),
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
    size: 'medium',
    onClick: fn(),
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    children: 'Small Button',
    size: 'small',
    onClick: fn(),
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    children: 'Large Button',
    size: 'large',
    onClick: fn(),
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    size: 'medium',
    disabled: true,
    onClick: fn(),
  },
};
