import gql from 'graphql-tag';
import { Client, ApolClient } from '../prismicHelpers'

// Models
import { CategoryModel } from "../../Models/Categories"

const getCategoriesQuery = gql`
query getCategories {
  allCategoriess (first : 20, sortBy: name_ASC){
    edges {
      node {
        _meta {
          uid,
          id
        },
        name        
      }
    }
  }
}
`;


export const getCategories = async () : Promise<Array<CategoryModel>> => {
  const queryOptions = {
    query: getCategoriesQuery,
  };

  return new Promise((resolve, reject) => { 
    ApolClient.query(queryOptions).then(async response => {
      var categories: Array<CategoryModel> = [];

      for (var i = 0; i < response.data.allCategoriess.edges.length; i++)
      {
        const count = await getPostCount(response.data.allCategoriess.edges[i].node._meta.id);

        categories.push({
          uid: response.data.allCategoriess.edges[i].node._meta.uid,
          name: response.data.allCategoriess.edges[i].node.name,
          postCount: count
        })
      }
      
      resolve(categories);
    }).catch(error => {
      reject(error);
    });
  })
}

const getCategoryPostCountQuery = gql`
query getCategoryPostCount($category: String) {
  allPosts (where : {category: $category} ) {
    totalCount
  }
}`;

const getPostCount = async (categoryId : string) : Promise<number> => {
  const queryOptions = {
    query: getCategoryPostCountQuery,
    variables: { category: categoryId },
  };  

  return new Promise((resolve, reject) => {  
    ApolClient.query(queryOptions).then(postCount =>
      resolve(postCount.data.allPosts.totalCount)
    ).catch(error => {
      reject(error);
    });
  });
}