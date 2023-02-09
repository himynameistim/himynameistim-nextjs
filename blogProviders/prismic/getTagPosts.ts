import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { PrismicClient } from "./prismicClient";

import { TagPostsModel } from "../../Models/TagPosts";
import { IGetTagPosts } from "../blog/getTagPosts";
import { prismicPostToPost } from "./mappers";
import { PrismicDocumentBlogPost } from "./Models/prismicPost";

@injectable()
export class GetTagPosts implements IGetTagPosts {
  prismicClient: PrismicClient;

  constructor(
    @inject("prismicClient") private prismicClientParam: PrismicClient
  ) {
    this.prismicClient = prismicClientParam;
  }

  public getTagPosts = async (
    tag: string,
    page: number,
    pageSize: number
  ): Promise<TagPostsModel> => {
    const posts =
      await this.prismicClient.client.getByTag<PrismicDocumentBlogPost>(tag);

    return {
      posts: posts.results.map((post) => {
        return prismicPostToPost(post);
      }),
      totalPages: posts.total_pages,
    };
  };
}
