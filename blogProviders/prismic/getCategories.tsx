import { inject, injectable } from "tsyringe";
import { documentTypes } from "./documentTypes";
import * as prismic from "@prismicio/client";

// Models
import { CategoryModel } from "../../Models/Categories";
import { iGetCategories } from "../blog/queries";
import { prismicClient } from "./prismicClient";

@injectable()
export class getCategories implements iGetCategories {
  prismicClient: prismicClient;

  constructor(
    @inject("prismicClient") private prismicClientParam: prismicClient
  ) {
    this.prismicClient = prismicClientParam;
  }

  public getAllCategories = async (): Promise<CategoryModel[]> => {
    const categoriesResults =
      this.prismicClient.client.getAllByType("categories");
    let categories: Array<CategoryModel> = [];

    for (let cat of await categoriesResults) {
      const count = await this.getPostCount(cat.id);

      categories.push({
        uid: cat.uid!,
        name: cat.data.name,
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
