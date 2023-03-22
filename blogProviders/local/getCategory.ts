// Models
import { CategoryModel } from "../../Models/Categories";
import { PreviewData } from "next";

export const getCategory = async (
  uid: string,
  previewData?: PreviewData
): Promise<CategoryModel> => {
  return {
    uid: "sitecore",
    name: "Sitecore",
    postCount: 1,
  };
};
