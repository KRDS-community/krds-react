import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Tabs } from '../../packages/core/lib';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      {
        label: 'Tab 1',
        content:
          'Tab 1 Content Tab 1 Content Tab 1 Content Tab 1 Content Tab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 Content',
      },
      {
        label: 'Tab 2',
        content:
          'Tab 2 Content Tab 2 Content Tab 2 Content Tab 2 Content Tab 1 Content Tab 1 Content Tab 1 Content Tab 1 Content Tab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 Content',
      },
      {
        label: 'Tab 3',
        content:
          'Tab 3 Content ab 2 Content Tab 2 Content Tab 1 Content Tab 1 Content Tab 1 Content Tab 1 Content Tab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentT ',
      },
    ],
  },
};

export const oneTab: Story = {
  args: {
    tabs: [
      {
        label: 'Tab 1',
        content:
          'Tab 1 Content Tab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 Content Tab 1 Content',
      },
    ],
  },
};

export const LongTitle: Story = {
  args: {
    tabs: [
      {
        label: 'Tab 1 Long Title',
        content:
          'Tab 1 Content Tab 1 Content Tab 1 Content Tab 1 Content Tab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 Content',
      },
      {
        label: 'Tab 2 Long Title',
        content:
          'Tab 2 Content Tab 2 Content Tab 2 Content Tab 2 Content Tab 1 Content Tab 1 Content Tab 1 Content Tab 1 Content Tab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentTab 1 Content',
      },
      {
        label: 'Tab 3 Long Title',
        content:
          'Tab 3 Content ab 2 Content Tab 2 Content Tab 1 Content Tab 1 Content Tab 1 Content Tab 1 Content Tab 1 ContentTab 1 ContentTab 1 ContentTab 1 ContentT ',
      },
    ],
  },
};
