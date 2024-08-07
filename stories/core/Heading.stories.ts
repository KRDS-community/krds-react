import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Heading } from '../../packages/core/lib';

const description = `
Heading은 페이지 단위 타이틀에 사용한다.

#### - Specification

| Style  | Size | Mobile size | Font weight | Line height | Letter spacing |
| ------ | ---- | ----------- | ----------- | ----------- | -------------- |
| Large  | 50   | 40          | 700         | 150%        | 1px            |
| Medium | 40   | 32          | 700         | 150%        | 1px            |
| Small  | 32   | 25          | 700         | 150%        | 1px            |`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Typography/Heading',
  component: Heading,
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
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Large: Story = {
  args: {
    size: 'l',
    children: 'Heading Large',
  },
};

export const Medium: Story = {
  args: {
    size: 'm',
    children: 'Heading Medium',
  },
};

export const Small: Story = {
  args: {
    size: 's',
    children: 'Heading Small',
  },
};

export const color: Story = {
  args: {
    size: 'm',
    color: 'primary',
    children: 'Heading Primary',
  },
};
