import { ImageBlock, PostModel, TextBlock } from "../../Models/Post";
import { PrismicDocumentBlogPost } from "./Models/prismicPost";
import * as prismicH from "@prismicio/helpers";

export function prismicPostToPost(
  prismicPost: PrismicDocumentBlogPost
): PostModel {
  let post: PostModel = {
    uid: prismicPost.uid as string,
    type: prismicPost.type,
    data: {
      heading: prismicPost.data.title as string,
      image: { url: prismicPost.data.image.url as string },
      postDate: prismicPost.data.post_date as string,
      _meta: {
        tags: prismicPost.tags,
      },
      body: [],
    },
  };

  for (const slice of prismicPost.data.body) {
    switch (slice.slice_type) {
      case "text_block":
        let textSlice: TextBlock = {
          sliceType: slice.slice_type,
          text: prismicH.asHTML(slice.primary.body1),
        };
        post.data.body.push(textSlice);
        break;
      case "full_width_image":
        let imageSlice: ImageBlock = {
          sliceType: slice.slice_type,
          image: {
            alt: slice.primary.image.alt ? slice.primary.image.alt : "",
            url: slice.primary.image.url ? slice.primary.image.url : "",
            dimensions: {
              height: slice.primary.image.dimensions
                ? slice.primary.image.dimensions.height.toString()
                : "",
              width: slice.primary.image.dimensions
                ? slice.primary.image.dimensions.width.toString()
                : "",
            },
          },
        };
        post.data.body.push(imageSlice);
        break;
    }
  }

  return post;
}
