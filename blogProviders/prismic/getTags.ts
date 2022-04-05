import { inject, injectable } from "tsyringe";
import { TagModel } from "../../Models/Tags";
import { getPostCount } from "../../utils/queries";
import { iGetTags } from "../blog/getTags";
import { prismicClient } from "./prismicClient";

@injectable()
export class getTags implements iGetTags {
  prismicClient: prismicClient;

  constructor(
    @inject("prismicClient") private prismicClientParam: prismicClient
  ) {
    this.prismicClient = prismicClientParam;
  }

  public getTags = async (includeCount: boolean): Promise<TagModel[]> => {
    const prismicTags = await this.prismicClient.client.getTags();

    let tags: TagModel[];
    tags = [];

    for (const tag of prismicTags) {
      tags.push({
        tag: tag,
        postCount: await this.getPostCount(tag),
      });
    }

    return tags;
  };

  private getPostCount = async (tag: string): Promise<number> => {
    const posts = await this.prismicClient.client.getByTag(tag);
    return posts.total_results_size;
  };
}
