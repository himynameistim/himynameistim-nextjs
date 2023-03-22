import { CategoryPosts } from "../../Models/CategoryPosts";
import { posts } from "./data/posts";
import { PreviewData } from "next";

export const getCategoryPosts = async (
  categoryId: string,
  page: number,
  pageSize: number,
  previewData?: PreviewData
): Promise<CategoryPosts> => {
  return {
    totalPages: 1,
    posts,
  };
};
