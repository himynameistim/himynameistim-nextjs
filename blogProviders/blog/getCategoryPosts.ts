// Models
import { CategoryPosts } from "../../Models/CategoryPosts";

export interface iGetCategoryPosts {
  getCategoryPosts(
    categoryId: string,
    page: number,
    pageSize: number
  ): Promise<CategoryPosts>;
}
