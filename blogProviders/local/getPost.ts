import { PostModel } from "../../Models/Post";
import { iGetPost } from "../blog/getPost";
import { posts } from "./data/posts";

export class getPost implements iGetPost {
  public getPost = async (
    uid: string,
    previewData: any
  ): Promise<PostModel> => {
    return posts[0];
  };
}
