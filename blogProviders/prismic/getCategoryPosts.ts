import { PreviewData } from "next";
import { createClient } from "./prismicClient";
import * as prismic from "@prismicio/client";
import * as prismicT from "@prismicio/types";

import { CategoryPosts } from "../../Models/CategoryPosts";
import { PrismicDocumentBlogPost } from "./Models/prismicPost";
import { prismicPostToPost } from "./mappers";

export const getCategoryPosts = async (
  categoryId: string | null,
  page: number,
  pageSize: number,
  previewData?: PreviewData
): Promise<CategoryPosts> => {
  const client = createClient({ previewData });
  let posts: prismicT.Query<PrismicDocumentBlogPost>;

  if (categoryId) {
    posts = await client.getByType<PrismicDocumentBlogPost>("post", {
      predicates: [prismic.predicate.at("my.post.category", categoryId)],
      pageSize,
      page,
      orderings: {
        field: "my.post.post_date",
        direction: "desc",
      },
    });
  } else {
    posts = await client.getByType<PrismicDocumentBlogPost>("post", {
      pageSize,
      page,
      orderings: {
        field: "my.post.post_date",
        direction: "desc",
      },
    });
  }

  return {
    totalPages: posts.total_pages,
    posts: posts.results.map((post) => {
      return prismicPostToPost(post);
    }),
  };
};
