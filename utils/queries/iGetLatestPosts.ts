// Models
import { FeaturedPost } from "../../Models/FeaturedPost"

export interface iGetLatestPosts {
  getLatestPosts(category?: String): Promise<FeaturedPost[]>;
}