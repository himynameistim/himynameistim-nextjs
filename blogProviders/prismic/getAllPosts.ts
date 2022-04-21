// Models
import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { PostModel } from "../../Models/Post";
import { iGetAllPosts } from "../blog/getAllPosts";
import { prismicClient } from "./prismicClient";
import { PrismicDocumentBlogPost } from "./Models/prismicPost";
import { prismicPostToPost } from "./mappers";

@injectable()
export class getAllPosts implements iGetAllPosts {
  prismicClient: prismicClient;

  constructor(
    @inject("prismicClient") private prismicClientParam: prismicClient
  ) {
    this.prismicClient = prismicClientParam;
  }

  getAllPosts = async (): Promise<PostModel[]> => {
    const allPosts =
      await this.prismicClient.client.getAllByType<PrismicDocumentBlogPost>(
        "post"
      );

    return allPosts.map((post) => {
      return prismicPostToPost(post);
    });
  };
}
