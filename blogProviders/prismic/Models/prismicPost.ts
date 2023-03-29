import * as prismicT from "@prismicio/types";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};

export type PrismicSliceBlogPostBodyText = prismicT.Slice<
  "text_block",
  {
    body1: prismicT.RichTextField;
  }
>;
export type PrismicSliceBlogPostBodyImageGallery = prismicT.Slice<
  "full_width_image",
  {
    image: prismicT.ImageField;
    caption: prismicT.KeyTextField;
  }
>;
export type PrismicSliceBlogPostBodyQuote = prismicT.Slice<
  "quote",
  {
    quote: prismicT.RichTextField;
    quotee: prismicT.KeyTextField;
  }
>;

/**
 * Primary content in CodeBlock → Primary
 *
 */
interface CodeBlockSliceDefaultPrimary {
  /**
   * Language field in *CodeBlock → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: code_block.primary.language
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  language: prismicT.SelectField<
    | "C#"
    | "CSS / SCSS"
    | "HTML / XHTML / XML"
    | "Git"
    | "JavaScript"
    | "PowerShell"
    | "React JSX"
    | "React TSX"
    | "Regex"
    | "SQL"
    | "TypeScript"
    | "Yaml"
  >;
  /**
   * Code field in *CodeBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: code_block.primary.code
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  code: prismicT.RichTextField;
}
/**
 * Default variation for CodeBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `CodeBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CodeBlockSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<CodeBlockSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *CodeBlock*
 *
 */
type CodeBlockSliceVariation = CodeBlockSliceDefault;
/**
 * CodeBlock Shared Slice
 *
 * - **API ID**: `code_block`
 * - **Description**: `CodeBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CodeBlockSlice = prismicT.SharedSlice<
  "code_block",
  CodeBlockSliceVariation
>;

export type PrismicDocumentBlogPost = prismicT.PrismicDocument<
  {
    title: prismicT.TitleField;
    post_date: prismicT.DateField;
    image: prismicT.ImageField;
    foo: prismicT.SliceZone<PrismicSliceBlogPostBodyText>;
    body: prismicT.SliceZone<
      | PrismicSliceBlogPostBodyText
      | PrismicSliceBlogPostBodyImageGallery
      | PrismicSliceBlogPostBodyQuote
      | CodeBlockSlice
    >;
  },
  "post",
  "en-us" | "fr-fr"
>;
