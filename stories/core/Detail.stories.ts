import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Detail } from '../../packages/core/lib';

const description = `
Detail은 추가 정보나 작은 정보 텍스트에 사용한다.

#### - Specification

| Style  | Size | Mobile size | Font weight | Line height | Letter spacing |
| ------ | ---- | ----------- | ----------- | ----------- | -------------- |
| Large  | 17   | 17          | 400, 700    | 150%        | 0              |
| Medium | 15   | 15          | 400, 700    | 150%        | 0              |
| Small  | 13   | 13          | 400, 700    | 150%        | 0              |`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Typography/Detail',
  component: Detail,
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

export const color: Story = {
  args: {
    size: 'm',
    color: 'primary',
    children: 'Detail Primary',
  },
};
