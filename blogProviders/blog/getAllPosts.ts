// Models
import { PostModel } from "../../Models/Post";

export interface IGetAllPosts {
  getAllPosts(): Promise<PostModel[]>;
}
