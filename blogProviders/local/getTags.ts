import type { TagModel } from "../../Models/Tags";


export const getTags = async (
  includeCount: boolean,
  previewData?: any
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
