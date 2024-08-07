import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Display } from '../../packages/core/lib';

const description = `
Display는 화면에서 가장 큰 텍스트로 주로 마케팅 용도로 사용한다.

#### - Specification

| Style  | Size | Mobile size | Font weight | Line height | Letter spacing |
| ------ | ---- | ----------- | ----------- | ----------- | -------------- |
| Large  | 66   | 40          | 700         | 150%        | 1px            |
| Medium | 50   | 32          | 700         | 150%        | 1px            |
| Small  | 40   | 25          | 700         | 150%        | 1px            |`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Typography/Display',
  component: Display,
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
} satisfies Meta<typeof Display>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Large: Story = {
  args: {
    size: 'l',
    children: 'Display Large',
  },
};

export const Medium: Story = {
  args: {
    size: 'm',
    children: 'Display Medium',
  },
};

export const Small: Story = {
  args: {
    size: 's',
    children: 'Display Small',
  },
};

export const color: Story = {
  args: {
    size: 'm',
    color: 'primary',
    children: 'Display Primary',
  },
};
