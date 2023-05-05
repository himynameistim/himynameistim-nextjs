import type { Meta, StoryObj } from "@storybook/react";

import { FeaturedRow1 } from "../components/featured-row-1";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof FeaturedRow1> = {
  title: "Components/Featured Row",
  component: FeaturedRow1,
  tags: ["autodocs"],
  argTypes: {
    posts: [],
  },
};

export default meta;
type Story = StoryObj<typeof FeaturedRow1>;

export const Primary: Story = {
  args: {
    posts: [
      {
        uid: "1",
        type: "Post",
        title: "Debugging VueJS + TypeScript with VS Code - Part 2",
        category: "Web Development",
        //postDate: new Date(2022, 2, 1, 1, 0, 0),
        image: {
          url: "https://images.prismic.io/himynameistim/659e2e7c-a632-4e89-aba8-c79bfa5dd643_nut-165083_1280.jpg?auto=compress,format",
        },
      },
      {
        uid: "2",
        type: "Post",
        title: "Debugging VueJS + TypeScript with VS Code - Part 2",
        category: "Web Development",
        //postDate: new Date(2022, 2, 1, 1, 0, 0),
        image: {
          url: "https://images.prismic.io/himynameistim/1db8bbb7-159c-452d-8f56-bb1293730719_edison-bulb-7391388_1920.jpg?auto=compress,format",
        },
      },
      {
        uid: "2",
        type: "Post",
        title: "Debugging VueJS + TypeScript with VS Code - Part 2",
        category: "Web Development",
        //postDate: new Date(2022, 2, 1, 1, 0, 0),
        image: {
          url: "https://images.prismic.io/himynameistim/57b16169-8fe2-489e-9801-f49c223f7951_screws-1052508_1920.jpg?auto=compress,format",
        },
      },
      {
        uid: "2",
        type: "Post",
        title: "Debugging VueJS + TypeScript with VS Code - Part 2",
        category: "Web Development",
        //postDate: new Date(2022, 2, 1, 1, 0, 0),
        image: {
          url: "https://images.prismic.io/himynameistim/df23904e-0525-4496-97fe-b88ae95e8aa6_Books.jpg?auto=compress,format",
        },
      },
    ],
  },
};
