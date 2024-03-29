import * as prismicT from "@prismicio/types";

export type PrismicDocumentCategory = prismicT.PrismicDocumentWithUID<
  {
    name: prismicT.KeyTextField;
  },
  "categories",
  "en-us"
>;
