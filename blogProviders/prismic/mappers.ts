import type { CodeBlock, ImageBlock, PostModel, TextBlock } from "../../Models/Post";
import type { PrismicDocumentBlogPost } from "./Models/prismicPost";
import * as prismicH from "@prismicio/helpers";
import type { CategoryModel } from "@Models/Categories";
import type { PrismicDocumentCategory } from "./Models/prismicCategory";
import type { FeaturedPost } from "@Models/FeaturedPost";
import type { Language } from "prism-react-renderer";

export function prismicPostToPost(
  prismicPost: PrismicDocumentBlogPost
): PostModel {
  let post: PostModel = {
    uid: prismicPost.uid as string,
    type: prismicPost.type,
    data: {
      heading: prismicH.asText(prismicPost.data.title),
      image: {
        url: prismicPost.data.image.url ? prismicPost.data.image.url : null,
      },
      postDate: prismicPost.data.post_date as string,
      _meta: {
        tags: prismicPost.tags,
      },
      body: [],
    },
    dateModified: new Date(prismicPost.last_publication_date).toISOString(),
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
      case "code_block":
        let language: Language;
        switch (slice.primary.language) {
          case "HTML / XHTML / XML":
            language = "markup";
            break;
          case "CSS / SCSS":
            language = "css";
            break;
          case "C#":
            language = "clike";
            break;
          case "Git":
            language = "git";
            break;
          case "JavaScript":
            language = "javascript";
            break;
          case "PowerShell":
            language = "bash";
            //language = "powershell";
            break;
          case "React JSX":
            language = "jsx";
            break;
          case "React TSX":
            language = "tsx";
            break;
          case "Regex":
            language = "javascript";
            //language = "regex";
            break;
          case "SQL":
            language = "sql";
            break;
          case "TypeScript":
            language = "typescript";
            break;
          default:
            language = "javascript";
            break;
        }

        let html = prismicH.asText(slice.primary.code);
        let codeSlice: CodeBlock = {
          sliceType: slice.slice_type,
          language: language, //"javascript", //slice.primary.language,
          html,
        };
        post.data.body.push(codeSlice);
        break;
    }
  }

  return post;
}

export function prismicPostToFeaturedPost(
  prismicPost: PrismicDocumentBlogPost
): FeaturedPost {
  let post: FeaturedPost = {
    uid: prismicPost.uid as string,
    type: prismicPost.type,
    title: prismicH.asText(prismicPost.data.title),
    postDate: prismicPost.data.post_date as string,
    category: "",
    image: { url: prismicPost.data.image.url as string },
  };

  return post;
}

export function prismicCategoryToCategory(
  prismicCategory: PrismicDocumentCategory,
  postCount: number
): CategoryModel {
  return {
    uid: prismicCategory.uid,
    name: prismicCategory.data.name as string,
    id: prismicCategory.id as string,
    postCount: postCount,
  };
}
