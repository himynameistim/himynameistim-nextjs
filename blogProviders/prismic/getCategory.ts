import { inject, injectable } from "tsyringe";
import * as prismic from "@prismicio/client";
// Models
import { CategoryModel } from "../../Models/Categories";
import { IGetCategory } from "../blog/getCategory";
import { PrismicClient } from "./prismicClient";
import { PrismicDocumentCategory } from "./Models/prismicCategory";
import { prismicCategoryToCategory } from "./mappers";

@injectable()
export class GetCategory implements IGetCategory {
  prismicClient: PrismicClient;

  constructor(
    @inject("prismicClient") private prismicClientParam: PrismicClient
  ) {
    this.prismicClient = prismicClientParam;
  }

  public getCategory = async (uid: string): Promise<CategoryModel> => {
    const cat =
      await this.prismicClient.client.getByUID<PrismicDocumentCategory>(
        "categories",
        uid
      );
    return prismicCategoryToCategory(cat, await this.getPostCount(cat.id));
  };

  private getPostCount = async (categoryId: string): Promise<number> => {
    const posts = this.prismicClient.client.getAllByType("post", {
      predicates: [prismic.predicate.at("my.post.category", categoryId)],
    });
    return (await posts).length;
  };
}
