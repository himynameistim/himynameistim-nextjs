import * as prismicT from "@prismicio/types";

type PrismicSliceBlogPostBodyText = prismicT.Slice<
  "text",
  never,
  {
    text: prismicT.RichTextField;
  }
>;
type PrismicSliceBlogPostBodyImageGallery = prismicT.Slice<
  "image_gallery",
  never,
  {
    image: prismicT.ImageField;
    caption: prismicT.KeyTextField;
  }
>;
type PrismicSliceBlogPostBodyQuote = prismicT.Slice<
  "quote",
  {
    quote: prismicT.RichTextField;
    quotee: prismicT.KeyTextField;
  }
>;

export type PrismicDocumentBlogPost = prismicT.PrismicDocument<
  {
    title: prismicT.KeyTextField;
    description: prismicT.RichTextField;
    body: prismicT.SliceZone<
      | PrismicSliceBlogPostBodyText
      | PrismicSliceBlogPostBodyImageGallery
      | PrismicSliceBlogPostBodyQuote
    >;
  },
  "page",
  "en-us" | "fr-fr"
>;
