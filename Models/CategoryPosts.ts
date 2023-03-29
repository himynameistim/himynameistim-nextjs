import { PostModel } from "./Post";

export interface CategoryPosts {
  totalPages: number;
  posts: PostModel[];
}
