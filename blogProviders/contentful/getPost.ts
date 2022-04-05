import { PostModel } from "../../Models/Post";
import { iGetPost } from "../blog/getPost";
import * as contentful from "contentful";
import { Post } from "./Models/Post";

export class getPost implements iGetPost {
  readonly client: contentful.ContentfulClientApi;

  constructor(client: contentful.ContentfulClientApi) {
    this.client = client;
  }

  public getPost = async (
    uid: string,
    previewData: any
  ): Promise<PostModel> => {
    const post = await this.client.getEntry<Post>(uid);

    return {
      uid: post.sys.id,
      type: "post",
      data: {
        heading: post.fields.title,
        image: { url: post.fields.image?.fields.file.url },
        postDate: "post.fields.postDate",
        body: [],
        category: { name: "" },
        _meta: {
          tags: [],
        },
      },
    };
  };
}
