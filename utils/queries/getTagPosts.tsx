import Prismic from "prismic-javascript";
import { Client } from "../prismicHelpers";
import markdownToHtml from "../prism";

// Models
import { PostModel } from "../../Models/Post";

export interface getTagPostsResult {
  totalPages: number;
  posts: Array<PostModel>;
}

export const getTagPosts = async (
  tag: string,
  page: number,
  pageSize: number
) => {
  if (tag == null) {
    return null;
  }

  var queryParams = [Prismic.Predicates.at("document.type", "post")];

  if (tag != "") {
    queryParams.push(Prismic.Predicates.at("document.tags", [tag]));
  }

  const posts: any = await Client().query(queryParams, {
    pageSize: pageSize,
    page: page,
    orderings: "[my.post.post_date desc]",
  });

  var result: getTagPostsResult = {
    posts: [],
    totalPages: posts.total_pages,
  };

  posts.results.map((x: { uid: any; type: any; data: any; tags: [] }) => {
    result.posts.push({
      uid: x.uid,
      type: x.type,
      data: {
        title: x.data.title,
        post_date: x.data.post_date,
        image: x.data.image,
        body: x.data.body,
        category: x.data.category,
        _meta: {
          tags: x.tags,
        },
      },
    });
  });

  for (let post of result.posts) {
    for (let bodyPart of post.data.body) {
      if (
        bodyPart.slice_type == "code_block" ||
        bodyPart.slice_type == "PostBodyCode_block"
      ) {
        bodyPart.primary.html = await markdownToHtml(
          bodyPart.primary.code,
          bodyPart.primary.language
        );
      }
    }
  }

  return result;
};
