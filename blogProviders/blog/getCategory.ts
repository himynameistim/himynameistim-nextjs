// Models
import { CategoryModel } from "../../Models/Categories";

export interface iGetCategory {
  getCategory(uid: string): Promise<CategoryModel>;
}
