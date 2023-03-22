import { PreviewData } from "next";
import { createClient } from "./prismicClient";
import * as prismic from "@prismicio/client";
// Models
import { CategoryModel } from "../../Models/Categories";
import { PrismicDocumentCategory } from "./Models/prismicCategory";
import { prismicCategoryToCategory } from "./mappers";

export const getCategory = async (
  uid: string,
  previewData?: PreviewData
): Promise<CategoryModel> => {
  const client = createClient({ previewData });
  const cat = await client.getByUID<PrismicDocumentCategory>("categories", uid);
  console.log(cat.id);

  return prismicCategoryToCategory(
    cat,
    await getPostCount(cat.id, previewData)
  );
};

async function getPostCount(
  categoryId: string,
  previewData?: PreviewData
): Promise<number> {
  const client = createClient({ previewData });
  const posts = client.getAllByType("post", {
    predicates: [prismic.predicate.at("my.post.category", categoryId)],
  });
  return (await posts).length;
}
