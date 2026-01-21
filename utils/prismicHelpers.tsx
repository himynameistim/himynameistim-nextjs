import * as prismic from "@prismicio/client";
import { repoName, linkResolver, hrefResolver } from "../prismic-configuration";

// Helper function to convert Prismic Rich Text links to anchor components
export const customLink = (
  type: string,
  element: any,
  content: string,
  children: React.ReactNode,
  index: number
) => (
  <a
    key={index}
    href={linkResolver(element.data)}
  >
    {content}
  </a>
);

// Client method to query documents from the Prismic repo
const endpoint = prismic.getRepositoryEndpoint(repoName!);
export const Client = prismic.createClient(endpoint);
/*export const Client = (req = null) =>
  Prismic.client(apiEndpoint!, createClientOptions(accessToken!, req));

const createClientOptions = (
  prismicAccessToken: string,
  req = null
): ApiOptions => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};*/

export default Client;
