// Models
import { PostModel } from "../../Models/Post";

export interface IGetPost {
  getPost(uid: string, previewData: any): Promise<PostModel | null>;
}
