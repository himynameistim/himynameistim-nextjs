// Models
import { FeaturedPost } from "../../Models/FeaturedPost";

export interface IGetLatestPosts {
  getLatestPosts(category?: String): Promise<FeaturedPost[]>;
}
