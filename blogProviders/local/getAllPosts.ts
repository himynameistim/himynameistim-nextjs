// Models

import type { PostModel } from "../../Models/Post";
import { posts } from "./data/posts";

export const getAllPosts = async (
  previewData?: any
): Promise<PostModel[]> => {
  return posts;
};
