import gql from 'graphql-tag';
import { Client, ApolClient } from '../prismicHelpers'

// Models
import { AlgoliaModel } from "../../Models/Algolia"

const allPostsQuery = gql`
query latestPosts {
  allPosts (first : 1000, sortBy: post_date_DESC){
    edges {
      node {
        category {
          ... on Categories {
            name
          }          
        },
        title,
        image
        _meta {
          uid,
          tags
        }
      }
    }
  }
}
`;

export const getAllPosts = async () : Promise<AlgoliaModel[]> => {
  const queryOptions = {
    query: allPostsQuery,
  };

  return new Promise((resolve, reject) => { ApolClient.query(queryOptions).then(response => {
    var posts: Array<AlgoliaModel> = [];
    response.data.allPosts.edges.map((edge: { node: { title: { text: any; }[]; category: any; image: any; _meta: { uid: any; tags: any; }; }; }, key: any) => {
      posts.push({
        type: "post",
        title: edge.node.title[0].text,
        imageUrl: edge.node.image?.url,
        objectID: edge.node._meta.uid,
        category: edge.node.category?.name,
        tags: edge.node._meta.tags
      })
    })
    resolve( posts);
  }).catch(error => {
    reject(error);
  });
});
};