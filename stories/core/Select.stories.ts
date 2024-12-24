import type { Meta, StoryObj } from "@storybook/react";
import { SelectProps, Select } from "../../packages/core/lib/components/Select";

const meta: Meta<SelectProps> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      story: {
        height: "400px",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["lg", "md", "sm"],
      },
    },
    options: {
      control: {
        type: "object",
      },
    },
    placeholder: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<SelectProps>;

export const Default: Story = {
  args: {
    options: [
      { value: "Option 1", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
      { value: "Option 3", label: "Option 3" },
    ],
    placeholder: "Select an option",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "sm",
  },
};

export const WithCustomOptions: Story = {
  args: {
    options: [
      { value: "Apple", label: "Apple" },
      { value: "Banana", label: "Banana" },
      { value: "Cherry", label: "Cherry" },
      { value: "Dragon Fruit", label: "Dragon Fruit" },
      { value: "Elderberry", label: "Elderberry" },
      { value: "Fig", label: "Fig" },
      { value: "Grape", label: "Grape" },
      { value: "Honeydew", label: "Honeydew" },
      { value: "Kiwi", label: "Kiwi" },
      { value: "Lemon", label: "Lemon" },
      { value: "Mango", label: "Mango" },
      { value: "Nectarine", label: "Nectarine" },
      { value: "Orange", label: "Orange" },
      { value: "Papaya", label: "Papaya" },
      { value: "Quince", label: "Quince" },
      { value: "Raspberry", label: "Raspberry" },
    ],
    placeholder: "Select a fruit",
    size: "md",
  },
};

export const NoOptions: Story = {
  args: {
    options: [],
    placeholder: "No options available",
    size: "md",
  },
};
