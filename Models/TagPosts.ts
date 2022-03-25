import { PostModel } from "./Post";

export interface TagPostsModel {
  totalPages: number;
  posts: Array<PostModel>;
}
