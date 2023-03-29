import * as prismic from "@prismicio/client";
import { PreviewData } from "next";
// Models
import { createClient } from "./prismicClient";
import { prismicPostToFeaturedPost } from "./mappers";
import { FeaturedPost } from "../../Models/FeaturedPost";
import { PrismicDocumentBlogPost } from "./Models/prismicPost";

export const getLatestPosts = async (
  categoryUid?: string,
  previewData?: PreviewData
): Promise<FeaturedPost[]> => {
  const client = createClient({ previewData });

  if (categoryUid) {
    const posts = await client.getByType<PrismicDocumentBlogPost>("post", {
      predicates: [prismic.predicate.at("my.post.category", categoryUid)],
      pageSize: 4,
      page: 1,
      orderings: {
        field: "my.post.post_date",
        direction: "desc",
      },
    });

    return posts.results.map((post) => {
      return prismicPostToFeaturedPost(post);
    });
  } else {
    const posts = await client.getByType<PrismicDocumentBlogPost>("post", {
      pageSize: 4,
      page: 1,
      orderings: {
        field: "my.post.post_date",
        direction: "desc",
      },
    });

    return posts.results.map((post) => {
      return prismicPostToFeaturedPost(post);
    });
  }
};
