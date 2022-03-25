// Models
import { CategoryModel } from "../../Models/Categories";

export interface iGetCategories {
  getAllCategories(): Promise<CategoryModel[]>;
}
