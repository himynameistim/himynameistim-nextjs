// Models
import { FeaturedPost } from "../../Models/FeaturedPost";

export interface iGetLatestPosts {
  getLatestPosts(categoryUid?: string): Promise<FeaturedPost[]>;
}
