// Models
import { FeaturedPost } from "../../Models/FeaturedPost";

export interface IGetLatestPosts {
  getLatestPosts(categoryUid?: string): Promise<FeaturedPost[]>;
}
