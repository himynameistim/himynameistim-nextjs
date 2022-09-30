// Models
import { TagPostsModel } from "../../Models/TagPosts";

export interface IGetTagPosts {
  getTagPosts(
    tag: string,
    page: number,
    pageSize: number
  ): Promise<TagPostsModel>;
}
