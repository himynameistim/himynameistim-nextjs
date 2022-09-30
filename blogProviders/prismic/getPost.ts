import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { PostModel } from "../../Models/Post";
import { IGetPost } from "../blog/getPost";
import { PrismicClient } from "./prismicClient";
import { PrismicDocumentBlogPost } from "./Models/prismicPost";
import { prismicPostToPost } from "./mappers";

@injectable()
export class GetPost implements IGetPost {
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
    const documentType: string = "post";
    return prismicPostToPost(
      await this.prismicClient.client.getByUID<PrismicDocumentBlogPost>(
        documentType,
        uid
      )
    );
  };
}
