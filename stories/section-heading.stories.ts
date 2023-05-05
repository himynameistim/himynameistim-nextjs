import type { Meta, StoryObj } from "@storybook/react";

import SectionHeading from "../components/section-heading";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SectionHeading> = {
  title: "Components/Section Heading",
  component: SectionHeading,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SectionHeading>;

export const Primary: Story = {
  args: {
    heading: "Web Development",
  },
};
