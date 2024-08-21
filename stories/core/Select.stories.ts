import type { Meta, StoryObj } from '@storybook/react';
import { SelectProps, Select } from '../../packages/core/lib/components/Select';

const meta: Meta<SelectProps> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['lg', 'md', 'sm'],
      },
    },
    options: {
      control: {
        type: 'object',
      },
    },
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<SelectProps>;

export const Default: Story = {
  args: {
    options: [
      { value: 'Option 1', label: 'Option 1' },
      { value: 'Option 2', label: 'Option 2' },
      { value: 'Option 3', label: 'Option 3' },
    ],
    placeholder: 'Select an option',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
};

export const WithCustomOptions: Story = {
  args: {
    options: [
      { value: 'Apple', label: 'Apple' },
      { value: 'Banana', label: 'Banana' },
      { value: 'Cherry', label: 'Cherry' },
    ],
    placeholder: 'Select a fruit',
    size: 'md',
  },
};

export const NoOptions: Story = {
  args: {
    options: [],
    placeholder: 'No options available',
    size: 'md',
  },
};
