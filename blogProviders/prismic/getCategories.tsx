import { createClient } from "./prismicClient";
import * as prismic from "@prismicio/client";

// Models
import type { CategoryModel } from "../../Models/Categories";
import type { PrismicDocumentCategory } from "./Models/prismicCategory";

export const getAllCategories = async (
  previewData?: any
): Promise<CategoryModel[]> => {
  const client = createClient({ previewData });
  const categoriesResults =
    client.getAllByType<PrismicDocumentCategory>("categories");
  let categories: Array<CategoryModel> = [];

  for (let cat of await categoriesResults) {
    const count = await getPostCount(cat.id, previewData);

    categories.push({
      uid: cat.uid!,
      name: cat.data.name as string,
      postCount: count,
    });
  }

  return categories;
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
