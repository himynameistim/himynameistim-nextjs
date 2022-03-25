// Models
import { TagPostsModel } from "../../Models/TagPosts";

export interface iGetTagPosts {
  getTagPosts(
    tag: string,
    page: number,
    pageSize: number
  ): Promise<TagPostsModel>;
}
