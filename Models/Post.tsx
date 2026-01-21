import type { Language } from "prism-react-renderer";

export interface PostModel {
  uid: string;
  type: string;
  data: {
    heading?: string;
    postDate: string;
    image: {
      url: string | null;
    };
    body: Slices[];
    category?: {
      name: string;
    };
    _meta: {
      tags: string[];
    };
  };
  dateModified: string;
}

export interface Slices {
  sliceType: string;
}

export interface TextBlock extends Slices {
  text: string;
}

export interface CodeBlock extends Slices {
  code?: string;
  language: Language;
  html: string;
}

export interface QuoteBlock extends Slices {
  quote: string;
}

export interface ImageBlock extends Slices {
  image: Image;
}

export interface Image {
  url: string;
  alt: string;
  dimensions: {
    height: string;
    width: string;
  };
}
