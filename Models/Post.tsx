import { RichTextBlock } from "prismic-reactjs";

export interface PostModel {
  uid: string,
  type: string,
  data: {
    title: RichTextBlock[],
    image: {
      url: string
    },
    body: string
  }
}