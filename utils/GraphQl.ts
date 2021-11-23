import { autoInjectable } from "tsyringe";
import { DocumentNode } from "apollo-link";
import ApolloClient from "apollo-client";
import { NormalizedCacheObject } from "apollo-cache-inmemory";
import { graphClient } from "./iGraphQl";

@autoInjectable()
export class apolloGraphClient implements graphClient {
  apolloClient: ApolloClient<NormalizedCacheObject>;

  constructor(apolloClient: ApolloClient<NormalizedCacheObject>) {
    this.apolloClient = apolloClient;
  }

  public query = async (
    query: DocumentNode,
    variables?: String
  ): Promise<any> => {
    const queryOptions = {
      query: query,
      variables: { variables },
    };

    return new Promise((resolve, reject) => {
      this.apolloClient
        .query(queryOptions)

        .then((response: any) => {
          resolve(response);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  };
}
