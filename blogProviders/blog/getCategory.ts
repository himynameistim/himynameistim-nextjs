// Models
import { CategoryModel } from "../../Models/Category";

export interface iGetCategory {
  getCategory(uid: string): Promise<CategoryModel>;
}
