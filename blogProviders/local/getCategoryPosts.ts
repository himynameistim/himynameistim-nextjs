import { CategoryPosts } from "../../Models/CategoryPosts";
import { iGetCategoryPosts } from "../blog/getCategoryPosts";
import { posts } from "./data/posts";

export class getCategoryPosts implements iGetCategoryPosts {
  public getCategoryPosts = async (
    categoryId: string,
    page: number,
    pageSize: number
  ): Promise<CategoryPosts> => {
    return {
      totalPages: 1,
      posts,
    };
  };
}
