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
    body: Slices[];
    category?: {
      name: string;
    };
    _meta: {
      tags: string[];
    };
  };
}

export interface Slices {
  sliceType: string
}

export interface TextBlock extends Slices {
  text: string;
}

export interface CodeBlock extends Slices {
  code: string;
}