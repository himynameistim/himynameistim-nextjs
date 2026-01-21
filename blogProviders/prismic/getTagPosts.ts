import { createClient } from "./prismicClient";

import type { TagPostsModel } from "../../Models/TagPosts";
import { prismicPostToPost } from "./mappers";
import type { PrismicDocumentBlogPost } from "./Models/prismicPost";

export const getTagPosts = async (
  tag: string,
  page: number,
  pageSize: number,
  previewData?: any
): Promise<TagPostsModel> => {
  const client = createClient({ previewData });
  const posts = await client.getByTag<PrismicDocumentBlogPost>(tag, {
    pageSize,
    page,
    orderings: {
      field: "my.post.post_date",
      direction: "desc",
    },
  });

  return {
    posts: posts.results.map((post) => {
      return prismicPostToPost(post);
    }),
    totalPages: posts.total_pages,
  };
};
