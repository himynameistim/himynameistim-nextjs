import gql from 'graphql-tag';
import { Client, ApolClient } from '../prismicHelpers'

// Models
import { FeaturedPost } from "../../Models/FeaturedPost"

const latestPostsQuery = gql`
query latestPosts($category: String) {
  allPosts (where : {category: $category}, first : 10, sortBy: post_date_DESC){
    edges {
      node {
        category {
          ... on Categories {
            name
          }          
        },
        title,
        image,
        post_date
        _meta {
          uid
        }
      }
    }
  }
}
`;

export const getLatestPosts = async (category: String) : Promise<FeaturedPost[]> => {
  const queryOptions = {
    query: latestPostsQuery,
    variables: { category },
  };

  return new Promise((resolve, reject) => { ApolClient.query(queryOptions).then(response => {
    var posts: Array<FeaturedPost> = [];
    response.data.allPosts.edges.map((edge: { node: { title: { text: any; }[]; category: any; image: any; post_date: Date; _meta: { uid: any; }; }; }, key: any) => {
      posts.push({
        type: "post",
        title: edge.node.title[0].text,
        image: edge.node.image,
        uid: edge.node._meta.uid,
        category: edge.node.category?.name,
        postDate: edge.node.post_date
      })
    })
    resolve( posts);
  }).catch(error => {
    reject(error);
  });
});
};