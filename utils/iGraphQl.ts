import { DocumentNode } from "graphql";

export interface graphClient {
  query(query: DocumentNode, variables?: String): any;
}
