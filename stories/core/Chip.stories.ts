import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Chip } from '../../packages/core/lib';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    checked: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    onChange: { action: 'clicked' },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    checked: true,
    onChange: (checked: boolean) => console.log(`Switched to ${checked}`),
    label: 'Chip',
    id: 'chip-1',
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    onChange: (checked: boolean) => console.log(`Switched to ${checked}`),
    label: 'Chip',
    id: 'chip-2',
  },
};

export const Disabled: Story = {
  args: {
    checked: true,
    onChange: (checked: boolean) => console.log(`Switched to ${checked}`),
    label: 'Chip',
    disabled: true,
    id: 'chip-3',
  },
};

export const UncheckedDisabled: Story = {
  args: {
    checked: false,
    onChange: (checked: boolean) => console.log(`Switched to ${checked}`),
    label: 'Chip',
    disabled: true,
    id: 'chip-4',
  },
};

export const SmallChip: Story = {
  args: {
    checked: true,
    onChange: (checked: boolean) => console.log(`Switched to ${checked}`),
    label: 'Chip',
    size: 'sm',
    id: 'chip-5',
  },
};

export const MediumChip: Story = {
  args: {
    checked: true,
    onChange: (checked: boolean) => console.log(`Switched to ${checked}`),
    label: 'Chip',
    size: 'md',
    id: 'chip-6',
  },
};

export const LargeChip: Story = {
  args: {
    checked: true,
    onChange: (checked: boolean) => console.log(`Switched to ${checked}`),
    label: 'Chip',
    size: 'lg',
    id: 'chip-7',
  },
};
