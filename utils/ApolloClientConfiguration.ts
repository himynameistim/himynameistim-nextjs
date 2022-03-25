import { ApolloClientOptions } from "apollo-client";
import { PrismicLink } from "apollo-link-prismic";
import { graphApiEndpoint } from "../prismic-configuration";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
  NormalizedCacheObject,
} from "apollo-cache-inmemory";
import fragmentTypes from "./fragmentTypes.json";

export interface ApolloClientConfiguration {
  //options: ApolloClientOptions;
}

export class ApolloClientConfigurationActual
  implements ApolloClientConfiguration
{
  public options = {
    link: PrismicLink({
      uri: graphApiEndpoint,
      repositoryName: "HiMyNameIsTim",
    }),
    cache: new InMemoryCache(),
  };
}
