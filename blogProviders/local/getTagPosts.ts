import { TagPostsModel } from "../../Models/TagPosts";
import { posts } from "./data/posts";
import { PreviewData } from "next";

export const getTagPosts = async (
  tag: string,
  page: number,
  pageSize: number,
  previewData?: PreviewData
): Promise<TagPostsModel> => {
  return {
    totalPages: 1,
    posts,
  };
};
