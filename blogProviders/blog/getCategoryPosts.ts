// Models
import { CategoryPosts } from "../../Models/CategoryPosts";

export interface IGetCategoryPosts {
  getCategoryPosts(
    categoryId: string,
    page: number,
    pageSize: number
  ): Promise<CategoryPosts>;
}
