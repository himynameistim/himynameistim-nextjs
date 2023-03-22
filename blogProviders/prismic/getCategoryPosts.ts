import { PreviewData } from "next";
import { createClient } from "./prismicClient";
import * as prismic from "@prismicio/client";

import { CategoryPosts } from "../../Models/CategoryPosts";
import { PrismicDocumentBlogPost } from "./Models/prismicPost";
import { prismicPostToPost } from "./mappers";

export const getCategoryPosts = async (
  categoryId: string,
  page: number,
  pageSize: number,
  previewData?: PreviewData
): Promise<CategoryPosts> => {
  const client = createClient({ previewData });
  const posts = await client.getByType<PrismicDocumentBlogPost>("post", {
    predicates: [prismic.predicate.at("my.post.category", categoryId)],
    pageSize,
    page,
    orderings: {
      field: "my.post.post_date",
      direction: "desc",
    },
  });

  return {
    totalPages: posts.total_pages,
    posts: posts.results.map((post) => {
      return prismicPostToPost(post);
    }),
  };
};
