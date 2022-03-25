import { RichTextBlock } from "prismic-reactjs";

export interface PostModel {
  uid: string;
  type: string;
  data: {
    heading?: string
    title?: RichTextBlock[];
    postDate: string;
    image: {
      url: string;
    };
    body: any;
    category?: {
      name: string;
    };
    _meta: {
      tags: string[];
    };
  };
}
