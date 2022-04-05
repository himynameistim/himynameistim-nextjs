import { inject, injectable } from "tsyringe";
import { documentTypes } from "./documentTypes"

// Models
import { CategoryModel } from "../../Models/Categories";
import { iGetCategories } from "../blog/queries";
import { prismicClient } from "./prismicClient";

@injectable()
export class getCategories implements iGetCategories {
  prismicClient: prismicClient;

  constructor(@inject("prismicClient") private prismicClientParam: prismicClient) {
    this.prismicClient = prismicClientParam;
  }
  
  public getAllCategories = async (): Promise<CategoryModel[]> => {
    const categoriesResults = this.prismicClient.client.getAllByType('categories');
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
  }

  private getPostCount = async (categoryId?: string): Promise<number> => {
   // const posts = this.prismicClient.client.getAllByType('Posts')
   // (await posts).filter(x => x.)
  return 0;
  }
}

/*
const getCategoryPostCountQuery = gql`
  query getCategoryPostCount($category: String) {
    allPosts(where: { category: $category }) {
      totalCount
    }
  }
`;

export const getPostCount = async (categoryId?: string): Promise<number> => {
  const queryOptions = {
    query: getCategoryPostCountQuery,
    variables: { category: categoryId },
  };

  return new Promise((resolve, reject) => {
    ApolClient.query(queryOptions)
      .then((postCount) => resolve(postCount.data.allPosts.totalCount))
      .catch((error) => {
        reject(error);
      });
  });
};
*/