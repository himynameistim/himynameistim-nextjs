import * as prismic from "@prismicio/client";

const routes = [
  {
    type: "post",
    path: "/blog/:uid",
  },
];

export const createClient = (config: any = {}) => {
  // Astro loads environment variables from .env files automatically
  // During SSG build, use process.env which is available on the server
  const apiEndpoint = process.env.PUBLIC_PRISMIC_API_ENDPOINT;
  const accessToken = process.env.accessToken;

  if (!apiEndpoint) {
    throw new Error(
      "PUBLIC_PRISMIC_API_ENDPOINT not defined. Please check your .env file.",
    );
  }

  const client = prismic.createClient(apiEndpoint, {
    routes,
    accessToken,
    ...config,
  });

  return client;
};
