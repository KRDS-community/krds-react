import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CriticalAlert } from '../../packages/core/lib';

export default {
    title: 'Components/CriticalAlert',
    component: CriticalAlert,
    tags: ['autodocs'],
    parameters: {
        backgrounds: { default: 'dark' }        
    },
} as Meta<typeof CriticalAlert>;

type Story = StoryObj<typeof CriticalAlert>;

export const Danger: Story = {
    args: {
        text: '미세먼지 노출 시 철저한 위생관리로 건강관리에 유의바랍니다.',
        variant: 'danger',
        link: 'https://github.com/KRDS-community/krds-react',
        title: 'krds-react로 이동',
    },
};

export const Info: Story = {
    args: {
        text: '미세먼지 노출 시 철저한 위생관리로 건강관리에 유의바랍니다.',
        variant: 'info',
        link: 'https://github.com/KRDS-community/krds-react',
        title: 'krds-react로 이동',
    },
};

export const Ok: Story = {
    args: {
        text: '미세먼지 노출 시 철저한 위생관리로 건강관리에 유의바랍니다.',
        variant: 'ok',
        link: 'https://github.com/KRDS-community/krds-react',
        title: 'krds-react로 이동',
    },
};
