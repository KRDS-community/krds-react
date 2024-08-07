import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Title } from '../../packages/core/lib';

const description = `
Title은 텝플릿 단위, 모듈 단위의 작말 및 기능을 강조할 때 사용한다.

#### - Specification

| Style   | Size | Mobile size | Font weight | Line height | Letter spacing |
| ------- | ---- | ----------- | ----------- | ----------- | -------------- |
| XXlarge | 32   | 25          | 700         | 150%        | 1px            |
| Xlarge  | 25   | 25          | 700         | 150%        | 0              |
| Large   | 21   | 21          | 700         | 150%        | 0              |
| Medium  | 19   | 19          | 700         | 150%        | 0              |
| Small   | 17   | 17          | 700         | 150%        | 0              |
| Xsmall  | 15   | 15          | 700         | 150%        | 0              |`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Typography/Title',
  component: Title,
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

export const color: Story = {
  args: {
    size: 'm',
    color: 'primary',
    children: 'Title Primary',
  },
};
