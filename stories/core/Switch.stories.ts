import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Switch } from '../../packages/core/lib';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['lg', 'md'],
      },
    },
    onChange: { action: 'clicked' },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    labelPosition: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    status: true,
    onChange: (checked: boolean) => console.log(`Switched to ${checked}`),
    label: 'Switch',
  },
};

export const UnChecked: Story = {
  args: {
    status: false,
    onChange: (checked: boolean) => console.log(`Switched to ${checked}`),
    label: 'Switch',
  },
};

export const Disabled: Story = {
  args: {
    status: true,
    onChange: (checked: boolean) => console.log(`Switched to ${checked}`),
    label: 'Switch',
    disabled: true,
  },
};

export const UncheckedDisabled: Story = {
  args: {
    status: false,
    onChange: (checked: boolean) => console.log(`Switched to ${checked}`),
    label: 'Switch',
    disabled: true,
  },
};

export const LeftLabel: Story = {
  args: {
    status: true,
    onChange: (checked: boolean) => console.log(`Switched to ${checked}`),
    label: 'Switch',
    labelPosition: 'left',
  },
};

export const RightLabel: Story = {
  args: {
    status: true,
    onChange: (checked: boolean) => console.log(`Switched to ${checked}`),
    label: 'Switch',
    labelPosition: 'right',
  },
};

export const LargeSwitch: Story = {
  args: {
    status: true,
    onChange: (checked: boolean) => console.log(`Switched to ${checked}`),
    label: 'Switch',
    size: 'lg',
  },
};

export const MediumSwitch: Story = {
  args: {
    status: true,
    onChange: (checked: boolean) => console.log(`Switched to ${checked}`),
    label: 'Switch',
    size: 'md',
  },
};
