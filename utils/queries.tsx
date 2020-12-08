import { Client, ApolClient } from './prismicHelpers'
import gql from 'graphql-tag';

async function fetchDocs(page = 1, routes = []) {
  const response = await Client().query('', { pageSize: 100, lang: '*', page });
  const allRoutes = routes.concat(response.results);
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocs(page + 1, allRoutes);
  }
  return [...new Set(allRoutes)];
};

/** Fetches all Prismic documents and filters them (eg. by document type).
 *  In production, you would probably query documents by type instead of filtering them.
**/

interface Route {
  type: string,
  uid: string 
}
export const queryRepeatableDocuments = async (filter: (s: Route) => boolean): Promise<Route[]> => {
  const allRoutes = await fetchDocs()
  return allRoutes.filter(filter)
}

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
        image
        _meta {
          uid
        }
      }
    }
  }
}
`;

interface Post {
  uid: string,
  type?: string,
  title: string,
  postDate?: Date,
  category?: string,
  image: string
}

export const queryLatestPosts = async (category: String) : Promise<Post[]> => {
  const queryOptions = {
    query: latestPostsQuery,
    variables: { category },
  };

  return new Promise((resolve, reject) => { ApolClient.query(queryOptions).then(response => {
    var posts: Array<Post> = [];
    response.data.allPosts.edges.map((edge: { node: { title: { text: any; }[]; category: any; image: any; _meta: { uid: any; }; }; }, key: any) => {
      posts.push({
        title: edge.node.title[0].text,
        image: edge.node.image,
        uid: edge.node._meta.uid,
        category: edge.node.category?.name
      })
    })
    resolve( posts);
  }).catch(error => {
    reject(error);
  });
});
};