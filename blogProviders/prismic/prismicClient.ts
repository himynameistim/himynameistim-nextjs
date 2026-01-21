import * as prismic from "@prismicio/client";

const routes = [
  {
    type: "post",
    path: "/blog/:uid",
  },
];

export const createClient = (config: any = {}) => {
  // In Astro, environment variables are accessed via import.meta.env
  // PUBLIC_ prefixed vars are exposed to client, but also available on server
  const apiEndpoint = import.meta.env.PUBLIC_PRISMIC_API_ENDPOINT;
  const accessToken = import.meta.env.accessToken;

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
