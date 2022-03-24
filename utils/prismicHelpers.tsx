import * as prismic from "@prismicio/client";
import Link from "next/link";
import { PrismicLink } from "apollo-link-prismic";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import {
  repoName,
  graphApiEndpoint,
  linkResolver,
  hrefResolver,
} from "../prismic-configuration";
import fragmentTypes from "./fragmentTypes.json";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: fragmentTypes,
});

export const ApolClient = new ApolloClient({
  link: PrismicLink({
    uri: graphApiEndpoint,
    repositoryName: "HiMyNameIsTim",
  }),
  cache: new InMemoryCache({ fragmentMatcher }),
});

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (
  type: string,
  element: any,
  content: string,
  children: React.ReactNode,
  index: number
) => (
  <Link
    key={index}
    href={hrefResolver(element.data)}
    as={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
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
