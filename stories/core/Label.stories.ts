import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Label } from '../../packages/core/lib';

const description = `
구성 요소 내부의 텍스트로 사용한다. (예: Button, Label, Chips ...)

#### - Specification

| Style  | Size | Mobile size | Font weight | Line height | Letter spacing |
| ------ | ---- | ----------- | ----------- | ----------- | -------------- |
| Large  | 19   | 19          | 400, 700    | 150%        | 0              |
| Medium | 17   | 17          | 400, 700    | 150%        | 0              |
| Small  | 15   | 15          | 400, 700    | 150%        | 0              |
| Xsmall | 13   | 13          | 400, 700    | 150%        | 0              |`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Typography/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: description,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      control: { type: 'text' },
      description:
        'Primary, Secondary, Gray, Point, Danger, Warning, Success, Info 컬러 지원',
    },
  },
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

export const color: Story = {
  args: {
    size: 'm',
    color: 'primary',
    children: 'Label Primary',
  },
};
