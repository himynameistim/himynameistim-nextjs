// Models
import { CategoryModel } from "../../Models/Categories";
import { IGetCategory } from "../blog/getCategory";

export class GetCategory implements IGetCategory {
  public getCategory = async (uid: string): Promise<CategoryModel> => {
    return {
      uid: "sitecore",
      name: "Sitecore",
      postCount: 1,
    };
  };
}
