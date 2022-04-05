import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { PostModel } from "../../Models/Post";
import { iGetPost } from "../blog/getPost";
import { prismicClient } from "./prismicClient";
import { PrismicDocumentBlogPost } from "./Models/prismicPost";

@injectable()
export class getPost implements iGetPost {
  prismicClient: prismicClient;

  constructor(
    @inject("prismicClient") private prismicClientParam: prismicClient
  ) {
    this.prismicClient = prismicClientParam;
  }

  public getPost = async (
    uid: string,
    previewData: any
  ): Promise<PostModel | null> => {
    const post = this.prismicClient.client.getByUID<PrismicDocumentBlogPost>(
      "Post",
      uid
    );

    return null;
  };
}
