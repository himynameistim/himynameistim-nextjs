import { RichTextBlock } from "prismic-reactjs";

export interface PostModel {
  uid: string;
  type: string;
  data: {
    heading?: string
    title?: RichTextBlock[];
    post_date: Date;
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
