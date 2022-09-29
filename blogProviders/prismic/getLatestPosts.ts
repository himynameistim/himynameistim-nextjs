import { inject, injectable } from "tsyringe";
import * as prismic from "@prismicio/client";
// Models
import { PrismicClient } from "./prismicClient";
import { prismicPostToFeaturedPost } from "./mappers";
import { iGetLatestPosts } from "../blog/getLatestPosts";
import { FeaturedPost } from "../../Models/FeaturedPost";
import { PrismicDocumentBlogPost } from "./Models/prismicPost";

@injectable()
export class GetLatestPosts implements iGetLatestPosts {
  prismicClient: PrismicClient;

  constructor(
    @inject("prismicClient") private prismicClientParam: PrismicClient
  ) {
    this.prismicClient = prismicClientParam;
  }

  public getLatestPosts = async (
    categoryUid?: string
  ): Promise<FeaturedPost[]> => {
    if (categoryUid) {
      const posts =
        await this.prismicClient.client.getByType<PrismicDocumentBlogPost>(
          "post",
          {
            predicates: [prismic.predicate.at("my.post.category", categoryUid)],
            pageSize: 4,
            page: 1,
            orderings: {
              field: "my.post.post_date",
              direction: "desc",
            },
          }
        );

      return posts.results.map((post) => {
        return prismicPostToFeaturedPost(post);
      });
    } else {
      const posts =
        await this.prismicClient.client.getByType<PrismicDocumentBlogPost>(
          "post",
          {
            pageSize: 4,
            page: 1,
            orderings: {
              field: "my.post.post_date",
              direction: "desc",
            },
          }
        );

      return posts.results.map((post) => {
        return prismicPostToFeaturedPost(post);
      });
    }
  };
}
