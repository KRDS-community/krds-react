import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Badge } from '../../packages/core/lib';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'success', 'warning', 'error'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['x-small', 'small', 'medium', 'large'],
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'default',
  },
};

export const Primary: Story = {
  args: {
    label: 'primary',
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    label: 'success',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'warning',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    label: 'danger',
    variant: 'danger',
  },
};

export const xSmall: Story = {
  args: {
    label: 'x-small',
    size: 'x-small',
  },
};

export const Small: Story = {
  args: {
    label: 'small',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    label: 'medium',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'large',
    size: 'large',
  },
};

export const Fill: Story = {
  args: {
    label: 'fill',
    appearance: 'fill',
  },
};

export const Stroke: Story = {
  args: {
    label: 'stroke',
    appearance: 'stroke',
  },
};
