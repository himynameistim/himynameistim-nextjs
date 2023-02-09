// Models
import { PostModel } from "../../Models/Post";
import { IGetAllPosts } from "../blog/getAllPosts";
import { posts } from "./data/posts";

export class GetAllPosts implements IGetAllPosts {
  getAllPosts = async (): Promise<PostModel[]> => {
    return posts;
  };
}
