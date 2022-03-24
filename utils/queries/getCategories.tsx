import gql from "graphql-tag";
import { ApolClient } from "../prismicHelpers";
import { Client } from "../prismicHelpers";

// Models
import { CategoryModel } from "../../Models/Categories";

const getCategoriesQuery = gql`
  query getCategories {
    allCategoriess(first: 20, sortBy: name_ASC) {
      edges {
        node {
          _meta {
            uid
            id
          }
          name
        }
      }
    }
  }
`;

export const getCategories = async (): Promise<Array<CategoryModel>> => {
const categoriesResults = Client.getAllByType('categories');
let categories: Array<CategoryModel> = [];

        for (let cat of await categoriesResults) {
          const count = await getPostCount(cat.id);

          categories.push({
            uid: cat.uid!,
            name: cat.data.name,
            postCount: count,
          });
        }

        return categories;
}

/*export const getCategories = async (): Promise<Array<CategoryModel>> => {
  const queryOptions = {
    query: getCategoriesQuery,
  };

  return new Promise((resolve, reject) => {
    ApolClient.query(queryOptions)
      .then(async (response) => {
        var categories: Array<CategoryModel> = [];

        for (let cat of response.data.allCategoriess.edges) {
          const count = await getPostCount(cat.node._meta.id);

          categories.push({
            uid: cat.node._meta.uid,
            name: cat.node.name,
            postCount: count,
          });
        }

        resolve(categories);
      })
      .catch((error) => {
        reject(error);
      });
  });
};*/

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
