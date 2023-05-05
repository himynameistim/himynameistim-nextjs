import type { Meta, StoryObj } from "@storybook/react";

import Category from "../components/category-heading";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Category> = {
  title: "Components/Category Heading",
  component: Category,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Category>;

export const Primary: Story = {
  args: {
    name: "Web Development",
  },
};
