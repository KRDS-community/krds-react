import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Checkbox } from '../../packages/core/lib';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['on', 'off', 'intermediate'],
      },
    },
    label: {
      control: {
        type: 'text',
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    status: 'on',
    onChange: (checked: 'on' | 'off' | 'intermediate') =>
      console.log(`Switched to ${checked}`),
    label: 'CheckBox',
    id: 'cb-1',
  },
};

export const Unchecked: Story = {
  args: {
    status: 'off',
    onChange: (checked: 'on' | 'off' | 'intermediate') =>
      console.log(`Switched to ${checked}`),
    label: 'CheckBox',
    id: 'cb-2',
  },
};

export const Intermediate: Story = {
  args: {
    status: 'intermediate',
    onChange: (checked: 'on' | 'off' | 'intermediate') =>
      console.log(`Switched to ${checked}`),
    label: 'CheckBox',
    id: 'cb-3',
  },
};

export const Disabled: Story = {
  args: {
    status: 'on',
    onChange: (checked: 'on' | 'off' | 'intermediate') =>
      console.log(`Switched to ${checked}`),
    label: 'CheckBox',
    disabled: true,
    id: 'cb-4',
  },
};

export const DisabledUnchecked: Story = {
  args: {
    status: 'off',
    onChange: (checked: 'on' | 'off' | 'intermediate') =>
      console.log(`Switched to ${checked}`),
    label: 'CheckBox',
    disabled: true,
    id: 'cb-5',
  },
};

export const DisabledIntermediate: Story = {
  args: {
    status: 'intermediate',
    onChange: (checked: 'on' | 'off' | 'intermediate') =>
      console.log(`Switched to ${checked}`),
    label: 'CheckBox',
    disabled: true,
    id: 'cb-6',
  },
};

export const NoLabel: Story = {
  args: {
    status: 'on',
    onChange: (checked: 'on' | 'off' | 'intermediate') =>
      console.log(`Switched to ${checked}`),
    id: 'cb-7',
  },
};

export const NoLabelDisabled: Story = {
  args: {
    status: 'on',
    onChange: (checked: 'on' | 'off' | 'intermediate') =>
      console.log(`Switched to ${checked}`),
    disabled: true,
    id: 'cb-8',
  },
};

export const SmallCheckbox: Story = {
  args: {
    status: 'on',
    onChange: (checked: 'on' | 'off' | 'intermediate') =>
      console.log(`Switched to ${checked}`),
    label: 'CheckBox',
    size: 'sm',
    id: 'cb-9',
  },
};

export const MediumCheckbox: Story = {
  args: {
    status: 'on',
    onChange: (checked: 'on' | 'off' | 'intermediate') =>
      console.log(`Switched to ${checked}`),
    label: 'CheckBox',
    size: 'md',
    id: 'cb-10',
  },
};

export const LargeCheckbox: Story = {
  args: {
    status: 'on',
    onChange: (checked: 'on' | 'off' | 'intermediate') =>
      console.log(`Switched to ${checked}`),
    label: 'CheckBox',
    size: 'lg',
    id: 'cb-11',
  },
};
