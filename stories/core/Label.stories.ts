import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Label } from '../../packages/core/lib';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Typography/Label',
  component: Label,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Large: Story = {
  args: {
    size: 'l',
    children: 'Label Large',
  },
};

export const LargeBold: Story = {
  args: {
    size: 'l',
    weight: 'bold',
    children: 'Label Large',
  },
};

export const Medium: Story = {
  args: {
    size: 'm',
    children: 'Label Medium',
  },
};

export const MediumBold: Story = {
  args: {
    size: 'm',
    weight: 'bold',
    children: 'Label Medium',
  },
};

export const Small: Story = {
  args: {
    size: 's',
    children: 'Label Small',
  },
};

export const SmallBold: Story = {
  args: {
    size: 's',
    weight: 'bold',
    children: 'Label Small',
  },
};

export const xSmall: Story = {
  args: {
    size: 'xs',
    children: 'Label xSmall',
  },
};

export const xSmallBold: Story = {
  args: {
    size: 'xs',
    weight: 'bold',
    children: 'Label xSmall',
  },
};
