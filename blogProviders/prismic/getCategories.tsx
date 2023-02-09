import { inject, injectable } from "tsyringe";
import * as prismic from "@prismicio/client";

// Models
import { CategoryModel } from "../../Models/Categories";
import { IGetCategories } from "../blog/queries";
import { PrismicClient } from "./prismicClient";
import { PrismicDocumentCategory } from "./Models/prismicCategory";

@injectable()
export class GetCategories implements IGetCategories {
  prismicClient: PrismicClient;

  constructor(
    @inject("prismicClient") private prismicClientParam: PrismicClient
  ) {
    this.prismicClient = prismicClientParam;
  }

  public getAllCategories = async (): Promise<CategoryModel[]> => {
    const categoriesResults =
      this.prismicClient.client.getAllByType<PrismicDocumentCategory>("categories");
    let categories: Array<CategoryModel> = [];

    for (let cat of await categoriesResults) {
      const count = await this.getPostCount(cat.id);

      categories.push({
        uid: cat.uid!,
        name: cat.data.name as string,
        postCount: count,
      });
    }

    return categories;
  };

  private getPostCount = async (categoryId: string): Promise<number> => {
    const posts = this.prismicClient.client.getAllByType("post", {
      predicates: [prismic.predicate.at("my.post.category", categoryId)],
    });
    return (await posts).length;
  };
}
