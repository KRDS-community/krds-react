import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { LinkButton } from '../../packages/core/lib';

const meta = {
  title: 'Components/Link',
  component: LinkButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['accent', 'default'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: '링크 버튼: Accent',
    link: 'https://uiux.egovframe.go.kr/guide/index.html',
    title: 'uiux.egovframe.go.kr 이동',
  },
};

export const Default: Story = {
  args: {
    children: '링크 버튼: Default',
    link: 'https://uiux.egovframe.go.kr/guide/index.html',
    title: 'uiux.egovframe.go.kr 이동',
  },
};

export const Small: Story = {
  args: {
    children: '링크 버튼: Default',
    link: 'https://uiux.egovframe.go.kr/guide/index.html',
    title: 'uiux.egovframe.go.kr 이동',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: '링크 버튼: Default',
    link: 'https://uiux.egovframe.go.kr/guide/index.html',
    title: 'uiux.egovframe.go.kr 이동',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: '링크 버튼: Default',
    link: 'https://uiux.egovframe.go.kr/guide/index.html',
    title: 'uiux.egovframe.go.kr 이동',
    size: 'large',
  },
};

export const popupLink: Story = {
  args: {
    children: '팝업 링크 버튼',
    link: 'https://uiux.egovframe.go.kr/guide/index.html',
    title: 'uiux.egovframe.go.kr 이동',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
};
