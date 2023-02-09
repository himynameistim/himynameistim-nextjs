import { PostModel } from "../../Models/Post";
import { IGetPost } from "../blog/getPost";
import { posts } from "./data/posts";

export class GetPost implements IGetPost {
  public getPost = async (
    uid: string,
    previewData: any
  ): Promise<PostModel | null> => {
    return posts[0];
  };
}
