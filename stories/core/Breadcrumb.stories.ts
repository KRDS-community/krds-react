import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Breadcrumb } from '../../packages/core/lib';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: '홈', onClick: () => console.log('홈') },
      { label: '문서', onClick: () => console.log('문서') },
      { label: '서적', onClick: () => console.log('서적') },
      { label: '서적 서적', onClick: () => console.log('서적 서적') },
    ],
  },
};

export const MaxItems: Story = {
  args: {
    items: [
      { label: '홈', onClick: () => console.log('홈') },
      { label: '문서', onClick: () => console.log('문서') },
      { label: '서적', onClick: () => console.log('서적') },
      { label: '서적 서적', onClick: () => console.log('서적 서적') },
    ],
    maxLength: 2,
  },
};

export const WithoutEllipsis: Story = {
  args: {
    items: [
      { label: '홈', onClick: () => console.log('홈') },
      { label: '문서', onClick: () => console.log('문서') },
      { label: '서적', onClick: () => console.log('서적') },
      { label: '서적 서적', onClick: () => console.log('서적 서적') },
    ],
    maxLength: 5,
  },
};

export const maxLengthIsLessThan2: Story = {
  args: {
    items: [
      { label: '홈', onClick: () => console.log('홈') },
      { label: '문서', onClick: () => console.log('문서') },
      { label: '서적', onClick: () => console.log('서적') },
      { label: '서적 서적', onClick: () => console.log('서적 서적') },
    ],
    maxLength: 1,
  },
};
