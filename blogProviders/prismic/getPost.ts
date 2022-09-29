import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { PostModel } from "../../Models/Post";
import { iGetPost } from "../blog/getPost";
import { PrismicClient } from "./prismicClient";
import { PrismicDocumentBlogPost } from "./Models/prismicPost";
import { prismicPostToPost } from "./mappers";

@injectable()
export class GetPost implements iGetPost {
  prismicClient: PrismicClient;

  constructor(
    @inject("prismicClient") private prismicClientParam: PrismicClient
  ) {
    this.prismicClient = prismicClientParam;
  }

  public getPost = async (
    uid: string,
    previewData: any
  ): Promise<PostModel | null> => {
    return prismicPostToPost(
      await this.prismicClient.client.getByUID<PrismicDocumentBlogPost>(
        "post",
        uid
      )
    );
  };
}
