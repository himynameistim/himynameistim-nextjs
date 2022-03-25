import { TagModel } from "../../Models/Tags";

export interface iGetTags {
  getTags(includeCount: boolean): Promise<TagModel[]>;
}
