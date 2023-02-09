import { inject, injectable } from "tsyringe";
import { TagModel } from "../../Models/Tags";
import { getPostCount } from "../../utils/queries";
import { iGetTags } from "../blog/getTags";
import { PrismicClient } from "./prismicClient";

@injectable()
export class GetTags implements iGetTags {
  prismicClient: PrismicClient;

  constructor(
    @inject("prismicClient") private prismicClientParam: PrismicClient
  ) {
    this.prismicClient = prismicClientParam;
  }

  public getTags = async (includeCount: boolean): Promise<TagModel[]> => {
    const prismicTags = await this.prismicClient.client.getTags();

    let tags: TagModel[];
    tags = [];

    for (const tag of prismicTags) {
      tags.push({
        tag,
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
