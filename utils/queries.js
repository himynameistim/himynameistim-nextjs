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
export const queryRepeatableDocuments = async (filter) => {
  const allRoutes = await fetchDocs()
  return allRoutes.filter(filter)
}

export const homePageQuery = async () => {
  const allRoutes = await fetchDocs()
  return allRoutes.filter(doc => doc.type === 'post').slice(0, 5)
}

const latestPostsQuery = gql`
query latestPosts($category: String) {
  allPosts (where : {category: $category}, first : 5, sortBy: post_date_DESC){
    edges {
      node {
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

export const queryLatestPosts = async (category) => {
  const queryOptions = {
    query: latestPostsQuery,
    variables: { category },
  };

  return new Promise((resolve, reject) => { ApolClient.query(queryOptions).then(response => {
    var posts = [];
    response.data.allPosts.edges.map((edge, key) => {
      posts.push({
        title: edge.node.title[0].text,
        image: edge.node.image,
        uid: edge.node._meta.uid
      })
    })
    resolve( posts);
  }).catch(error => {
    reject(error);
  });
});
};