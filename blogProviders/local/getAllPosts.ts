// Models
import { PostModel } from "../../Models/Post";
import { iGetAllPosts } from "../blog/getAllPosts";
import { posts } from "./data/posts";

export class getAllPosts implements iGetAllPosts {
  getAllPosts = async (): Promise<PostModel[]> => {
    return posts;
  };
}
