// Models
import { PreviewData } from "next";
import { PostModel } from "../../Models/Post";
import { posts } from "./data/posts";

export const getAllPosts = async (
  previewData?: PreviewData
): Promise<PostModel[]> => {
  return posts;
};
