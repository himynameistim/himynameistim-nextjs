import type { PostModel } from "../../Models/Post";
import { createClient } from "./prismicClient";
import type { PrismicDocumentBlogPost } from "./Models/prismicPost";
import { prismicPostToPost } from "./mappers";

export const getPost = async (
  uid: string,
  previewData?: any
): Promise<PostModel | null> => {
  const client = createClient({ previewData });

  return prismicPostToPost(
    await client.getByUID<PrismicDocumentBlogPost>("post", uid)
  );
};
