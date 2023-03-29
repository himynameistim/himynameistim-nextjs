import { PreviewData } from "next";

// Models
import { CategoryModel } from "../../Models/Categories";

export const getAllCategories = async (
  previewData?: PreviewData
): Promise<CategoryModel[]> => {
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
