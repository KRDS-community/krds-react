import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextArea } from '../../packages/core/lib';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
      },
    },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'text-area-id',
    title: 'Title',
    description: 'Description',
    placeholder: 'Placeholder',
    size: 'medium',
    maxLength: 100,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      console.log(e.target.value),
  },
};

export const NoMaxLength: Story = {
  args: {
    id: 'text-area-id-3',
    title: 'Title',
    description: 'Description',
    placeholder: 'Placeholder',
    size: 'medium',
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      console.log(e.target.value),
  },
};

export const Small: Story = {
  args: {
    id: 'text-area-id-2',
    title: 'Title',
    description: 'Description',
    placeholder: 'Placeholder',
    size: 'small',
    maxLength: 100,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      console.log(e.target.value),
  },
};

export const Medium: Story = {
  args: {
    id: 'text-area-id-4',
    title: 'Title',
    description: 'Description',
    placeholder: 'Placeholder',
    size: 'medium',
    maxLength: 100,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      console.log(e.target.value),
  },
};

export const Large: Story = {
  args: {
    id: 'text-area-id-5',
    title: 'Title',
    description: 'Description',
    placeholder: 'Placeholder',
    size: 'large',
    maxLength: 100,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      console.log(e.target.value),
  },
};

export const NoTitle: Story = {
  args: {
    id: 'text-area-id-6',
    description: 'Description',
    placeholder: 'Placeholder',
    size: 'medium',
    maxLength: 100,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      console.log(e.target.value),
  },
};

export const NoDescription: Story = {
  args: {
    id: 'text-area-id-7',
    placeholder: 'Placeholder',
    size: 'medium',
    maxLength: 100,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      console.log(e.target.value),
  },
};

export const NoPlaceholder: Story = {
  args: {
    id: 'text-area-id-8',
    title: 'Title',
    description: 'Description',
    size: 'medium',
    maxLength: 100,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      console.log(e.target.value),
  },
};
