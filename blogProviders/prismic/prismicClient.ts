import * as prismic from "@prismicio/client";

const routes = [
  {
    type: "post",
    path: "/blog/:uid",
  },
];

export const createClient = (config: any = {}) => {
  const apiEndpoint = import.meta.env.NEXT_PUBLIC_PRISMIC_API_ENDPOINT || process.env.NEXT_PUBLIC_PRISMIC_API_ENDPOINT;
  if (!apiEndpoint) {
    throw new Error("NEXT_PUBLIC_PRISMIC_API_ENDPOINT not defined");
  }
  const client = prismic.createClient(
    apiEndpoint,
    {
      routes,
      ...config,
    }
  );

  return client;
};
