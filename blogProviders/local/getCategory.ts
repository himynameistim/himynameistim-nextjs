// Models
import type { CategoryModel } from "../../Models/Categories";


export const getCategory = async (
  uid: string,
  previewData?: any
): Promise<CategoryModel> => {
  return {
    uid: "sitecore",
    name: "Sitecore",
    postCount: 1,
  };
};
