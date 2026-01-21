import type { TagPostsModel } from "../../Models/TagPosts";
import { posts } from "./data/posts";


export const getTagPosts = async (
  tag: string,
  page: number,
  pageSize: number,
  previewData?: any
): Promise<TagPostsModel> => {
  return {
    totalPages: 1,
    posts,
  };
};
