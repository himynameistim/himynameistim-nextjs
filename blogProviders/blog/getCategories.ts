// Models
import { CategoryModel } from "../../Models/Categories";

export interface IGetCategories {
  getAllCategories(): Promise<CategoryModel[]>;
}
