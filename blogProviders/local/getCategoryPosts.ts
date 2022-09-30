import { CategoryPosts } from "../../Models/CategoryPosts";
import { IGetCategoryPosts } from "../blog/getCategoryPosts";
import { posts } from "./data/posts";

export class getCategoryPosts implements IGetCategoryPosts {
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
