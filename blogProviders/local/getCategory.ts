// Models
import { CategoryModel } from "../../Models/Category";
import { iGetCategory } from "../blog/getCategory";

export class getCategory implements iGetCategory {
  public getCategory = async (uid: string): Promise<CategoryModel> => {
    return {
      id: "sitecore",
      uid: "sitecore",
      name: "Sitecore",
    };
  };
}
