import { TagPostsModel } from "../../Models/TagPosts";
import { iGetTagPosts } from "../blog/getTagPosts";
import { posts } from "./data/posts";

export class getTagPosts implements iGetTagPosts {
  public getTagPosts = async (
    tag: string,
    page: number,
    pageSize: number
  ): Promise<TagPostsModel> => {
    return {
      totalPages: 1,
      posts: posts,
    };
  };
}
