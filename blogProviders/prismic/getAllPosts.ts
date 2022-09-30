// Models
import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { PostModel } from "../../Models/Post";
import { IGetAllPosts } from "../blog/getAllPosts";
import { PrismicClient } from "./prismicClient";
import { PrismicDocumentBlogPost } from "./Models/prismicPost";
import { prismicPostToPost } from "./mappers";

@injectable()
export class GetAllPosts implements IGetAllPosts {
  prismicClient: PrismicClient;

  constructor(
    @inject("prismicClient") private prismicClientParam: PrismicClient
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
