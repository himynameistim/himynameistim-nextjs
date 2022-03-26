// Models
import { PostModel } from "../../Models/Post";

export interface iGetAllPosts {
  getAllPosts(): Promise<PostModel[]>;
}
