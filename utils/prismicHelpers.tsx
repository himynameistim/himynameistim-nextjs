import Prismic from 'prismic-javascript'
import Link from 'next/link'
import { PrismicLink } from 'apollo-link-prismic';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import {
  apiEndpoint,
  graphApiEndpoint,
  accessToken,
  linkResolver,
  hrefResolver
} from '../prismic-configuration'
import fragmentTypes from './fragmentTypes.json';
import { ApiOptions } from 'prismic-javascript/types/Api';

const fragmentMatcher = new IntrospectionFragmentMatcher(
  { introspectionQueryResultData: fragmentTypes },
);

export const ApolClient = new ApolloClient({
  link: PrismicLink({ 
    uri: graphApiEndpoint,
    repositoryName: "HiMyNameIsTim"
   }),
  cache: new InMemoryCache({ fragmentMatcher })
})

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type: string, element: any, content: string, children: React.ReactNode, index: number) => (
  <Link
    key={index}
    href={hrefResolver(element.data)}
    as={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
)

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken: string) : ApiOptions => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export default Client

