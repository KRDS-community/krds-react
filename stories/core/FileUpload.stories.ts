import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FileUpload } from '../../packages/core/lib';
import { resolve } from 'path';

const meta = {
  title: 'Components/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    maxFiles: {
      control: {
        type: 'number',
      },
    },
    onUpload: { action: 'clicked' },
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '파일 업로드',
    description: '테스트용 업로드 컴포넌트',
    maxFiles: 3,
    onUpload: async (file: File) => {
      console.log(file);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 2000);
      });
    },
    onRemove: (fileName: string) => {
      console.log('remove', fileName);
    },
  },
};
