import { inject, injectable } from "tsyringe";
import { documentTypes } from "./documentTypes";
import * as prismic from "@prismicio/client";

import { CategoryPosts } from "../../Models/CategoryPosts";
import { iGetCategoryPosts } from "../blog/getCategoryPosts";
import { PrismicDocumentBlogPost } from "./Models/prismicPost";
import { prismicClient } from "./prismicClient";
import { prismicPostToPost } from "./mappers";

@injectable()
export class getCategoryPosts implements iGetCategoryPosts {
  prismicClient: prismicClient;

  constructor(
    @inject("prismicClient") private prismicClientParam: prismicClient
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
          pageSize: pageSize,
          page: page,
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
