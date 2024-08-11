import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { RadioButtonGroup } from '../../packages/core/lib';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
    },
    options: {
      control: {
        type: 'object',
      },
    },
    selectedValue: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof RadioButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    name: 'Name',
    options: [
      { value: 'on', label: 'On' },
      { value: 'off', label: 'Off' },
      { value: 'intermediate', label: 'Intermediate' },
    ],
    selectedValue: 'on',
    onChange: (value: string) => console.log(`Switched to ${value}`),
  },
};

export const NothingSelected: Story = {
  args: {
    name: 'Name',
    options: [
      { value: 'on', label: 'On' },
      { value: 'off', label: 'Off' },
      { value: 'intermediate', label: 'Intermediate' },
    ],
    onChange: (value: string) => console.log(`Switched to ${value}`),
  },
};

export const Disabled: Story = {
  args: {
    name: 'Name',
    options: [
      { value: 'on', label: 'On' },
      { value: 'off', label: 'Off' },
      { value: 'intermediate', label: 'Intermediate' },
    ],
    selectedValue: 'on',
    disabled: true,
    onChange: (value: string) => console.log(`Switched to ${value}`),
  },
};

export const DisabledSelected: Story = {
  args: {
    name: 'Name',
    options: [
      { value: 'on', label: 'On' },
      { value: 'off', label: 'Off' },
      { value: 'intermediate', label: 'Intermediate' },
    ],
    selectedValue: 'on',
    disabled: true,
    onChange: (value: string) => console.log(`Switched to ${value}`),
  },
};

export const horizontal: Story = {
  args: {
    name: 'Name',
    options: [
      { value: 'on', label: 'On' },
      { value: 'off', label: 'Off' },
      { value: 'intermediate', label: 'Intermediate' },
    ],
    selectedValue: 'on',
    direction: 'horizontal',
    onChange: (value: string) => console.log(`Switched to ${value}`),
  },
};

export const vertical: Story = {
  args: {
    name: 'Name',
    options: [
      { value: 'on', label: 'On' },
      { value: 'off', label: 'Off' },
      { value: 'intermediate', label: 'Intermediate' },
    ],
    selectedValue: 'on',
    direction: 'vertical',
    onChange: (value: string) => console.log(`Switched to ${value}`),
  },
};

export const Small: Story = {
  args: {
    name: 'Name',
    options: [
      { value: 'on', label: 'On' },
      { value: 'off', label: 'Off' },
      { value: 'intermediate', label: 'Intermediate' },
    ],
    selectedValue: 'on',
    size: 'sm',
    onChange: (value: string) => console.log(`Switched to ${value}`),
  },
};

export const Medium: Story = {
  args: {
    name: 'Name',
    options: [
      { value: 'on', label: 'On' },
      { value: 'off', label: 'Off' },
      { value: 'intermediate', label: 'Intermediate' },
    ],
    selectedValue: 'on',
    size: 'md',
    onChange: (value: string) => console.log(`Switched to ${value}`),
  },
};

export const Large: Story = {
  args: {
    name: 'Name',
    options: [
      { value: 'on', label: 'On' },
      { value: 'off', label: 'Off' },
      { value: 'intermediate', label: 'Intermediate' },
    ],
    selectedValue: 'on',
    size: 'lg',
    onChange: (value: string) => console.log(`Switched to ${value}`),
  },
};
