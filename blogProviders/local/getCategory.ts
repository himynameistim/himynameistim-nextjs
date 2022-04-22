// Models
import { CategoryModel } from "../../Models/Categories";
import { iGetCategory } from "../blog/getCategory";

export class getCategory implements iGetCategory {
  public getCategory = async (uid: string): Promise<CategoryModel> => {
    return {
      uid: "sitecore",
      name: "Sitecore",
      postCount: 1,
    };
  };
}
