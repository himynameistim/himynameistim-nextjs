import * as prismicT from "@prismicio/types";

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

export type PrismicDocumentBlogPost = prismicT.PrismicDocument<{
  title: prismicT.TitleField;
  post_date: prismicT.DateField;
  image: prismicT.ImageField;
  foo: prismicT.SliceZone<PrismicSliceBlogPostBodyText>;
  body: prismicT.SliceZone<
    | PrismicSliceBlogPostBodyText
    | PrismicSliceBlogPostBodyImageGallery
    | PrismicSliceBlogPostBodyQuote
  >;
} /*,
  "page",
  "en-us" | "fr-fr"*/>;
