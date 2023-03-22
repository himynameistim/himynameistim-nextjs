import { TagModel } from "../../Models/Tags";
import { PreviewData } from "next";

export const getTags = async (
  includeCount: boolean,
  previewData?: PreviewData
): Promise<TagModel[]> => {
  return [
    {
      tag: "sitecore",
      postCount: 5,
    },
    {
      tag: "SQL",
      postCount: 2,
    },
    {
      tag: "SQL Server",
      postCount: 2,
    },
  ];
};
