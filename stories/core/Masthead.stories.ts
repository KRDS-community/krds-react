import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Masthead } from '../../packages/core/lib';

const meta = {
    title: 'Components/Masthead',
    component: Masthead,
    tags: ['autodocs'],
    

}satisfies Meta<typeof Masthead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
