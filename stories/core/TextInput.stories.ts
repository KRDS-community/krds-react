import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextInput } from '../../packages/core/lib';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    length: {
      control: { type: 'select' },
      options: ['x-short', 'short', 'middle', 'long', 'full'],
    },
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
    helpText: {
      control: {
        type: 'text',
      },
    },
    error: {
      control: {
        type: 'text',
      },
    },
    onChange: { action: 'changed' },
    maxLength: { control: { type: 'number' } },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'text-input',
    title: '이름',
    description: '입력하신 이름이 저장됩니다.',
    placeholder: '이름을 입력하세요',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    length: 'long',
    maxLength: 20,
  },
};

export const Error: Story = {
  args: {
    id: 'text-input2',
    title: '이름',
    description: '입력하신 이름이 저장됩니다.',
    placeholder: '이름을 입력하세요',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    length: 'long',
    maxLength: 20,
    error: '이름을 입력하세요',
  },
};

export const HelpText: Story = {
  args: {
    id: 'text-input3',
    title: '이름',
    description: '입력하신 이름이 저장됩니다.',
    placeholder: '이름을 입력하세요',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    length: 'long',
    maxLength: 20,
    helpText: '성과 이름을 한번에 입력하세요.',
  },
};

export const XShort: Story = {
  args: {
    id: 'text-input4',
    title: '이름',
    description: '입력하신 이름이 저장됩니다.',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    length: 'x-short',
    maxLength: 20,
  },
};

export const Short: Story = {
  args: {
    id: 'text-input5',
    title: '이름',
    description: '입력하신 이름이 저장됩니다.',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    length: 'short',
    maxLength: 20,
  },
};

export const Middle: Story = {
  args: {
    id: 'text-input6',
    title: '이름',
    description: '입력하신 이름이 저장됩니다.',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    length: 'middle',
    maxLength: 20,
  },
};

export const Long: Story = {
  args: {
    id: 'text-input7',
    title: '이름',
    description: '입력하신 이름이 저장됩니다.',
    placeholder: '이름을 입력하세요',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    length: 'long',
    maxLength: 20,
  },
};

export const Full: Story = {
  args: {
    id: 'text-input8',
    title: '이름',
    description: '입력하신 이름이 저장됩니다.',
    placeholder: '이름을 입력하세요',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    length: 'full',
    maxLength: 20,
  },
};

export const NoTitle: Story = {
  args: {
    id: 'text-input9',
    description: '입력하신 이름이 저장됩니다.',
    placeholder: '이름을 입력하세요',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    length: 'long',
    maxLength: 20,
  },
};

export const NoDescription: Story = {
  args: {
    id: 'text-input10',
    placeholder: '이름을 입력하세요',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    length: 'long',
    maxLength: 20,
  },
};
