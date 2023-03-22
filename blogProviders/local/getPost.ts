import { PostModel } from "../../Models/Post";
import { posts } from "./data/posts";
import { PreviewData } from "next";

export const getPost = async (
  uid: string,
  previewData: PreviewData
): Promise<PostModel | null> => {
  return posts[0];
};
