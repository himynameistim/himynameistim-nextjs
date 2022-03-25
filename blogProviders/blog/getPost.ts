// Models
import { PostModel } from "../../Models/Post";

export interface iGetPost {
  getPost(uid: string, previewData: any): Promise<PostModel>;
}
