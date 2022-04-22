import * as prismicT from "@prismicio/types";

export type PrismicDocumentCategory = prismicT.PrismicDocument<
  {
    name: prismicT.KeyTextField;
  },
  "categories",
  "en-us"
>;
