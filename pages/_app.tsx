import "../styles/globals.scss";
import "prismjs/themes/prism-tomorrow.css";
import "reflect-metadata";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../utils/gtag";
import { container } from "tsyringe";
import ApolloClient from "apollo-client";
import { PrismicLink } from "apollo-link-prismic";
import { graphApiEndpoint } from "../prismic-configuration";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-cache-inmemory";
import { apolloGraphClient } from "../utils/GraphQl";
import fragmentTypes from "../utils/fragmentTypes.json";
import { registerMethods as registerLocalMethods } from "../blogProviders/local/registerMethods";
import { registerMethods as registerPrismicMethods } from "../blogProviders/prismic/registerMethods";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: fragmentTypes,
});

// URI should come from env variables
container.registerInstance(
  ApolloClient,
  new ApolloClient({
    link: PrismicLink({
      uri: "https://himynameistim.cdn.prismic.io/graphql",
      repositoryName: "HiMyNameIsTim",
    }),
    cache: new InMemoryCache({ fragmentMatcher }),
  })
);

container.register("graphClient", apolloGraphClient);

switch (process.env.cmsprovider) {
  case "local":
    registerLocalMethods(container);
    break;
  case "prismic":
    registerPrismicMethods(container);
    break;
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
function graphClient(graphClient: any, apolloGraphClient: any) {
  throw new Error("Function not implemented.");
}
