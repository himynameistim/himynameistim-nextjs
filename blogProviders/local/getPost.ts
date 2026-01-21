import type { PostModel } from "../../Models/Post";
import { posts } from "./data/posts";


export const getPost = async (
  uid: string,
  previewData: any
): Promise<PostModel | null> => {
  return posts[0];
};
