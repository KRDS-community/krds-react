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
    children: '버튼: Primary',
    onClick: fn(),
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '버튼: Secondary',
    onClick: fn(),
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: '버튼: Tertiary',
    onClick: fn(),
  },
};

export const XSmall: Story = {
  args: {
    variant: 'primary',
    children: 'X-Small 버튼',
    size: 'x-small',
    onClick: fn(),
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    children: 'Small 버튼',
    size: 'small',
    onClick: fn(),
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    children: 'Medium 버튼',
    size: 'medium',
    onClick: fn(),
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    children: 'Large 버튼',
    size: 'large',
    onClick: fn(),
  },
};

export const XLarge: Story = {
  args: {
    variant: 'primary',
    children: 'X-Large 버튼',
    size: 'x-large',
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
