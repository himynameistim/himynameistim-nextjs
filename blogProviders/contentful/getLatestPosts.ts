// Models
import { FeaturedPost } from "../../Models/FeaturedPost";
import { iGetLatestPosts } from "../blog/getLatestPosts";
import * as contentful from "contentful";
import { Post } from "./Models/Post";

export class getLatestPosts implements iGetLatestPosts {
  readonly client: contentful.ContentfulClientApi;

  constructor(client: contentful.ContentfulClientApi) {
    this.client = client;
  }

  public getLatestPosts = async (
    categoryUid?: string
  ): Promise<FeaturedPost[]> => {
    const entries = await this.client.getEntries<Post>({
      content_type: "post",
    });

    let featuredPosts: FeaturedPost[] = [];

    for (let post of entries.items) {
      featuredPosts.push({
        title: post.fields.title,
        image: { url: post.fields.image?.fields.file.url },
        category: "Sitecore",
        postDate: post.fields.postDate,
        type: "post",
        uid: post.sys.id,
      });
    }

    return featuredPosts;
  };
}
