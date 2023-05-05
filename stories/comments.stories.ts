import type { Meta, StoryObj } from "@storybook/react";

import CommentsList from "../components/molecules/comment-list";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CommentsList> = {
  title: "Molecules/Comments List",
  component: CommentsList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CommentsList>;

export const Primary: Story = {
  args: {
    comments: [
      {
        relatedPostUid: "1",
        name: "John Doe",
        postDate: new Date(2023, 1, 12),
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut aliquam purus sit. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Orci a scelerisque purus semper eget duis at tellus at. Viverra aliquet eget sit amet. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Quam adipiscing vitae proin sagittis nisl. Sit amet mattis vulputate enim nulla. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Nec dui nunc mattis enim ut tellus elementum sagittis. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Tristique senectus et netus et malesuada fames. Vel facilisis volutpat est velit egestas dui id ornare arcu. Egestas diam in arcu cursus euismod.",
        image: null,
      },
      {
        relatedPostUid: "1",
        name: "Jane Doe",
        postDate: new Date(2023, 2, 22),
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Pellentesque habitant morbi tristique senectus. Arcu vitae elementum curabitur vitae nunc sed. Suscipit adipiscing bibendum est ultricies. Et malesuada fames ac turpis egestas sed tempus urna et. Nunc faucibus a pellentesque sit. Euismod elementum nisi quis eleifend. A diam maecenas sed enim ut sem. Tincidunt eget nullam non nisi est sit. Nec ullamcorper sit amet risus nullam. Sit amet nulla facilisi morbi.",
        image: null,
      },
    ],
  },
};
