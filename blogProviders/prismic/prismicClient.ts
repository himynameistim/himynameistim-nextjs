import * as prismic from "@prismicio/client";
import { autoInjectable } from "tsyringe";
import { iPrismicClient } from "./iPrismicClient";
import fetch from "node-fetch";

@autoInjectable()
export class prismicClient implements iPrismicClient {
  public client: prismic.Client;

  constructor(repoName: string) {
    // Client method to query documents from the Prismic repo
    const endpoint = prismic.getRepositoryEndpoint(repoName!);
    this.client = prismic.createClient(endpoint);
  }
}
