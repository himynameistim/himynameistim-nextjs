import type { Meta, StoryObj } from "@storybook/react";

import { Article, DisplayMode } from "../components/article";
import { CodeBlock, TextBlock } from "@Models/Post";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Article> = {
  title: "Components/Article",
  component: Article,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Article>;

const textSlice: TextBlock = {
  sliceType: "text_block",
  text: "<p>Hello this is paragraph 1</p><p>This is paragraph 2 that contain <a href='https://www.himynameistim.com/' target='_blank'>A Link</a></p>",
};

const codeSlice: CodeBlock = {
  sliceType: "code_block",
  html: '{\r\n "command": "npm run serve",\r\n "name": "Run npm serve",\r\n "request": "launch",\r\n "type": "node-terminal"\r\n },',
  language: "bash",
};

export const Primary: Story = {
  args: {
    article: {
      uid: "1",
      type: "Post",
      data: {
        _meta: {
          tags: ["sitecore"],
        },
        body: [textSlice, codeSlice],
        image: {
          url: "https://images.prismic.io/himynameistim/84a8f608-e504-4446-9bb4-9744de06f09b_Jigsaw.jpg?auto=compress,format",
        },
        heading: "Debugging VueJS + TypeScript with VS Code - Part 2",
        category: { name: "webdevelopment" },
        postDate: new Date(2022, 2, 1).toString(),
      },
      dateModified: new Date(2022, 2, 1).toString(),
    },
    displayMode: DisplayMode.Article,
  },
};
