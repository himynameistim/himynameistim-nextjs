import { TagModel } from "../../Models/Tags";
import { iGetTags } from "../blog/getTags";

export class getTags implements iGetTags {
  public getTags = async (includeCount: boolean): Promise<TagModel[]> => {
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
}
