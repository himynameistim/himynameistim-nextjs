import type { Meta, StoryObj } from "@storybook/react";

import CommentForm from "../components/atoms/comment-form";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CommentForm> = {
  title: "Molecules/Comments Form",
  component: CommentForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CommentForm>;

export const Authenticated: Story = {
  args: {
    authenticated: true,
  },
};

export const Unauthenticated: Story = {
  args: {
    authenticated: false,
  },
};
