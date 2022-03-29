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

    const tags: TagModel[];

    for (tag of tags) {
      tags.push({
        tag: tag,
      });
    }

    return tags;
  };

  private getPostCound = async (tag: string): Promise<number> => {
    return 1;
  };
}
