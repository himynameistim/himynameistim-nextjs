import Prismic from "prismic-javascript";
import { Client } from "../prismicHelpers";

// Models
import { CategoryModel } from "../../Models/Category";

export const getCategoryIdByUid = async (
  uid: string
): Promise<CategoryModel> => {
  return new Promise((resolve, reject) => {
    Client()
      .query(
        [
          Prismic.Predicates.at("document.type", "categories"),
          Prismic.Predicates.at("my.categories.uid", uid),
        ],
        {
          pageSize: 1,
          page: 1,
        }
      )
      .then((response) => {
        if (response.results.length > 0) {
          const category: any = response.results[0];

          var result: CategoryModel = {
            id: category.id,
            uid: category.uid,
            name: category.data.name,
          };

          resolve(result);
        } else {
          reject();
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
