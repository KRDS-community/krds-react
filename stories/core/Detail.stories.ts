import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Detail } from '../../packages/core/lib';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Typography/Detail',
  component: Detail,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Detail>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Large: Story = {
  args: {
    size: 'l',
    children: 'Detail Large',
  },
};

export const Medium: Story = {
  args: {
    size: 'm',
    children: 'Detail Medium',
  },
};

export const Small: Story = {
  args: {
    size: 's',
    children: 'Detail Small',
  },
};
