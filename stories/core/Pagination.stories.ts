import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Pagination } from '../../packages/core/lib';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    totalPages: {
      control: {
        type: 'number',
      },
    },
    currentPage: {
      control: {
        type: 'number',
      },
    },
    onPageChange: { action: 'clicked' },
    visiblePages: {
      control: {
        type: 'number',
      },
      description:
        '페이지 번호 중 표시할 페이지 수: 항상 홀수개로 표시됩니다. 짝수를 넣으면 +1로 계산됩니다.',
    },
    allowDirectInput: {
      control: 'boolean',
    },
    twoLines: {
      control: 'boolean',
      description: '직접 입력 버튼을 표시하면 적용되지 않습니다.',
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalPages: 20,
    currentPage: 9,
    onPageChange: (page: number) => console.log(`Clicked page ${page}`),
    visiblePages: 5,
    allowDirectInput: false,
    twoLines: false,
  },
};

export const TwoLines: Story = {
  args: {
    totalPages: 20,
    currentPage: 9,
    onPageChange: (page: number) => console.log(`Clicked page ${page}`),
    visiblePages: 5,
    allowDirectInput: false,
    twoLines: true,
  },
};

export const WithInput: Story = {
  args: {
    totalPages: 20,
    currentPage: 9,
    onPageChange: (page: number) => console.log(`Clicked page ${page}`),
    visiblePages: 5,
    allowDirectInput: true,
  },
};

export const Short: Story = {
  args: {
    totalPages: 20,
    currentPage: 4,
    onPageChange: (page: number) => console.log(`Clicked page ${page}`),
    visiblePages: 5,
  },
};

export const All: Story = {
  args: {
    totalPages: 10,
    currentPage: 4,
    onPageChange: (page: number) => console.log(`Clicked page ${page}`),
    visiblePages: 10,
  },
};
