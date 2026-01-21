import type { CategoryPosts } from "../../Models/CategoryPosts";
import { posts } from "./data/posts";


export const getCategoryPosts = async (
  categoryId: string,
  page: number,
  pageSize: number,
  previewData?: any
): Promise<CategoryPosts> => {
  return {
    totalPages: 1,
    posts,
  };
};
