import gql from 'graphql-tag';
import { Client, ApolClient } from '../prismicHelpers'

// Models
import { AlgoliaModel } from "../../Models/Algolia"

const allPostsQuery = gql`
query latestPosts ($after: String) {
  allPosts (first : 1000, sortBy: post_date_DESC, after: $after){
    totalCount
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      node {
        category {
          ... on Categories {
            name
          }          
        },
        title,
        image,
        post_date,
        _meta {
          uid,
          tags
        }
      }
    }
  }
}
`;

export const getAllPosts = async (posts: AlgoliaModel[] = [], after?: string) : Promise<AlgoliaModel[]> => {
  const queryOptions = {
    query: allPostsQuery,
    variables: { after },
  };

  /*return new Promise((resolve, reject) => { ApolClient.query(queryOptions).then(response => {
    var posts: Array<AlgoliaModel> = [];
    response.data.allPosts.edges.map((edge: { node: { title: { text: any; }[]; category: any; post_date: any; image: any; _meta: { uid: any; tags: any; }; }; }, key: any) => {
      posts.push({
        type: "post",
        title: edge.node.title[0].text,
        imageUrl: edge.node.image?.url,
        objectID: edge.node._meta.uid,
        category: edge.node.category?.name,
        tags: edge.node._meta.tags,
        postDate: edge.node.post_date,
      })
    })

    if (response.data.allPosts.pageInfo.hasNextPage)
    {
      nextPage = await getAllPosts(response.data.allPosts.pageInfo.endCursor);
      posts.push()
    }
    

    resolve( posts);
  }).catch(error => {
    reject(error);
  });
  });*/

  const response = await ApolClient.query(queryOptions);

  //var posts: Array<AlgoliaModel> = [];
  response.data.allPosts.edges.map((edge: { node: { title: { text: any; }[]; category: any; post_date: any; image: any; _meta: { uid: any; tags: any; }; }; }, key: any) => {
    posts.push({
      type: "post",
      title: edge.node.title[0].text,
      imageUrl: edge.node.image?.url,
      objectID: edge.node._meta.uid,
      category: edge.node.category?.name,
      tags: edge.node._meta.tags,
      postDate: edge.node.post_date,
    })
  })

  //const allPosts = posts.concat()

  if (response.data.allPosts.pageInfo.hasNextPage)
  {
    return getAllPosts(posts, response.data.allPosts.pageInfo.endCursor)
  }

  return [...new Set(posts)];

};