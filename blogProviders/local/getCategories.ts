import { IGetCategories } from "../blog/getCategories";

// Models
import { CategoryModel } from "../../Models/Categories";

export class GetCategories implements IGetCategories {
  constructor() {}

  public getAllCategories = async (): Promise<CategoryModel[]> => {
    return [
      {
        name: "Sitecore",
        postCount: 10,
        uid: "sitecore",
      },
      {
        name: "Web Development",
        postCount: 5,
        uid: "webdevelopment",
      },
      { name: "Devops", postCount: 12, uid: "devops" },
    ];
  };
}
