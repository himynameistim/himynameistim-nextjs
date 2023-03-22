import { PreviewData } from "next";
import { PostModel } from "../../Models/Post";
import { createClient } from "./prismicClient";
import { PrismicDocumentBlogPost } from "./Models/prismicPost";
import { prismicPostToPost } from "./mappers";

export const getPost = async (
  uid: string,
  previewData?: PreviewData
): Promise<PostModel | null> => {
  const client = createClient({ previewData });

  const documentType: string = "post";
  return prismicPostToPost(
    await client.getByUID<PrismicDocumentBlogPost>(documentType, uid)
  );
};
