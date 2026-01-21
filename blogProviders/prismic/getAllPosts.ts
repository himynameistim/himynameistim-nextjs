import { createClient } from "./prismicClient";
// Models
import type { PostModel } from "../../Models/Post";
import type { PrismicDocumentBlogPost } from "./Models/prismicPost";
import { prismicPostToPost } from "./mappers";

export const getAllPosts = async (
  previewData?: any
): Promise<PostModel[]> => {
  const client = createClient({ previewData });
  const allPosts = await client.getAllByType<PrismicDocumentBlogPost>("post");

  return allPosts.map((post) => {
    return prismicPostToPost(post);
  });
};
