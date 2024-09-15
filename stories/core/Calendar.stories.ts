import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Calendar } from '../../packages/core/lib';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: {
        type: 'select',
        options: ['single', 'range'],
      },
    },
    onSelect: { action: 'clicked' },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mode: 'single',
    onSelect: (date: string[]) => console.log(`Selected date: ${date[0]}`),
  },
};

export const Range: Story = {
  args: {
    mode: 'range',
    onSelect: (date: string[]) =>
      console.log(`Selected date: ${date[0]} ~ ${date[1]}`),
  },
};
