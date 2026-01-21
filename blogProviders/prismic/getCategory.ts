import { createClient } from "./prismicClient";
import * as prismic from "@prismicio/client";
// Models
import type { CategoryModel } from "../../Models/Categories";
import type { PrismicDocumentCategory } from "./Models/prismicCategory";
import { prismicCategoryToCategory } from "./mappers";

export const getCategory = async (
  uid: string,
  previewData?: any
): Promise<CategoryModel> => {
  const client = createClient({ previewData });
  const cat = await client.getByUID<PrismicDocumentCategory>("categories", uid);

  return prismicCategoryToCategory(
    cat,
    await getPostCount(cat.id, previewData)
  );
};

async function getPostCount(
  categoryId: string,
  previewData?: any
): Promise<number> {
  const client = createClient({ previewData });
  const posts = client.getAllByType("post", {
    predicates: [prismic.predicate.at("my.post.category", categoryId)],
  });
  return (await posts).length;
}
