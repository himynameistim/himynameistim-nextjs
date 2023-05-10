import type { Preview } from "@storybook/react";
import React from "react";
import "@src/styles/globals.scss";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <UserProvider>
        <Story />
      </UserProvider>
    ),
  ],
};

export default preview;
