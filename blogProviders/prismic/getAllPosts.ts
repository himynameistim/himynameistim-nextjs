import { PreviewData } from "next";
import { createClient } from "./prismicClient";
// Models
import { PostModel } from "../../Models/Post";
import { PrismicDocumentBlogPost } from "./Models/prismicPost";
import { prismicPostToPost } from "./mappers";

export const getAllPosts = async (
  previewData?: PreviewData
): Promise<PostModel[]> => {
  const client = createClient({ previewData });
  const allPosts = await client.getAllByType<PrismicDocumentBlogPost>("post");

  return allPosts.map((post) => {
    return prismicPostToPost(post);
  });
};
