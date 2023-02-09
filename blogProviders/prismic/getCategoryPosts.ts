import { inject, injectable } from "tsyringe";
import * as prismic from "@prismicio/client";

import { CategoryPosts } from "../../Models/CategoryPosts";
import { iGetCategoryPosts } from "../blog/getCategoryPosts";
import { PrismicDocumentBlogPost } from "./Models/prismicPost";
import { PrismicClient } from "./prismicClient";
import { prismicPostToPost } from "./mappers";

@injectable()
export class GetCategoryPosts implements iGetCategoryPosts {
  prismicClient: PrismicClient;

  constructor(
    @inject("prismicClient") private prismicClientParam: PrismicClient
  ) {
    this.prismicClient = prismicClientParam;
  }

  public getCategoryPosts = async (
    categoryId: string,
    page: number,
    pageSize: number
  ): Promise<CategoryPosts> => {
    const posts =
      await this.prismicClient.client.getByType<PrismicDocumentBlogPost>(
        "post",
        {
          predicates: [prismic.predicate.at("my.post.category", categoryId)],
          pageSize,
          page,
          orderings: {
            field: "my.post.post_date",
            direction: "desc",
          },
        }
      );

    return {
      totalPages: posts.total_pages,
      posts: posts.results.map((post) => {
        return prismicPostToPost(post);
      }),
    };
  };
}
