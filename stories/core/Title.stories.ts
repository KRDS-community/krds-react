import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Title } from '../../packages/core/lib';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Typography/Title',
  component: Title,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const xxLarge: Story = {
  args: {
    size: 'xxl',
    children: 'Title xxLarge',
  },
};

export const xLarge: Story = {
  args: {
    size: 'xl',
    children: 'Title xLarge',
  },
};

export const Large: Story = {
  args: {
    size: 'l',
    children: 'Title Large',
  },
};

export const Medium: Story = {
  args: {
    size: 'm',
    children: 'Title Medium',
  },
};

export const Small: Story = {
  args: {
    size: 's',
    children: 'Title Small',
  },
};

export const xSmall: Story = {
  args: {
    size: 'xs',
    children: 'Title xSmall',
  },
};
