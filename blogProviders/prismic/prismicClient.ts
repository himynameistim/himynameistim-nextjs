import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

const routes = [
  {
    type: "post",
    path: "/blog/:uid",
  },
];

export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  if (!process.env.NEXT_PUBLIC_PRISMIC_API_ENDPOINT) {
    throw new Error("NEXT_PUBLIC_PRISMIC_API_ENDPOINT not defined");
  }
  const client = prismic.createClient(
    process.env.NEXT_PUBLIC_PRISMIC_API_ENDPOINT,
    {
      routes,
      ...config,
    }
  );
  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
