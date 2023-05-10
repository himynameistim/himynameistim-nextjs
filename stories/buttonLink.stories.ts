import type { Meta, StoryObj } from "@storybook/react";
import ButtonLink from "components/atoms/buttonLink";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ButtonLink> = {
  title: "Atoms/Button Link",
  component: ButtonLink,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const Primary: Story = {
  args: {
    children: "Click Me",
  },
};
