import { TagModel } from "../../Models/Tags";

export interface IGetTags {
  getTags(includeCount: boolean): Promise<TagModel[]>;
}
