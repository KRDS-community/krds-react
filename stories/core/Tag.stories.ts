import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Tag } from '../../packages/core/lib';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    onDelete: { action: 'clicked' },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Primary',
    onClick: (label: string) => alert(`Clicked ${label}`),
    onDelete: (label: string) => alert(`Deleted ${label}`),
  },
};

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'small',
    onClick: (label: string) => alert(`Clicked ${label}`),
    onDelete: (label: string) => alert(`Deleted ${label}`),
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium',
    size: 'medium',
    onClick: (label: string) => alert(`Clicked ${label}`),
    onDelete: (label: string) => alert(`Deleted ${label}`),
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'large',
    onClick: (label: string) => alert(`Clicked ${label}`),
    onDelete: (label: string) => alert(`Deleted ${label}`),
  },
};

export const NoDelete: Story = {
  args: {
    label: 'No Delete',
    onClick: (label: string) => alert(`Clicked ${label}`),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    onClick: (label: string) => alert(`Clicked ${label}`),
    onDelete: (label: string) => alert(`Deleted ${label}`),
  },
};
