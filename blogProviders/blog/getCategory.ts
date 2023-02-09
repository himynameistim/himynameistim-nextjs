// Models
import { CategoryModel } from "../../Models/Categories";

export interface IGetCategory {
  getCategory(uid: string): Promise<CategoryModel>;
}
