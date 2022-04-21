import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { ImageBlock, PostModel, TextBlock } from "../../Models/Post";
import { iGetPost } from "../blog/getPost";
import { prismicClient } from "./prismicClient";
import * as prismicT from "@prismicio/types";
import {
  PrismicDocumentBlogPost,
  PrismicSliceBlogPostBodyText,
  PrismicSliceBlogPostBodyImageGallery,
} from "./Models/prismicPost";
import { ca } from "date-fns/locale";
import { Link, RichText, Date } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import * as prismicH from "@prismicio/helpers";
import { prismicPostToPost } from "./mappers";

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
    return prismicPostToPost(
      await this.prismicClient.client.getByUID<PrismicDocumentBlogPost>(
        "post",
        uid
      )
    );
  };
}
