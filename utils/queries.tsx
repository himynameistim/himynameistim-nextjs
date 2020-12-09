import { Client, ApolClient } from './prismicHelpers'
import Prismic from 'prismic-javascript'
import gql from 'graphql-tag';

// Models
import { CategoriesModel, CategoryModel } from "../Models/Categories"
import { PostModel } from "../Models/Post"

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


const getCategoriesQuery = gql`
query getCategories {
  allCategoriess (first : 20, sortBy: name_ASC){
    edges {
      node {
        _meta {
          uid
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

const getCategoryIdByName = async (categoryName: string) => {
  const category = await Client().query([
    Prismic.Predicates.at("document.type", "categories"),
    Prismic.Predicates.at("my.categories.uid", categoryName)],
    {
      pageSize: 1,
      page: 1
    }
  )

  if (category.results.length > 0)
  {
    return category.results[0].id;
  } else {
    return null;
  }
}

export const getCategoryPosts = async (categoryName : string) => {
  const categoryId = await getCategoryIdByName(categoryName);
  if (categoryId == null)
  {
    return null
  }
  const posts : any = await Client().query([
    Prismic.Predicates.at("document.type", "post"), 
    Prismic.Predicates.at('my.post.category', categoryId)],
    {
      pageSize: 2,
      page: 1,
      orderings: "[my.post.post_date desc]"
    },
  )

  var result: Array<PostModel> = [];
  
  posts.results.map((x: { uid: any; type: any; data: any; }) => {
    result.push(
      {
        uid: x.uid,
        type: x.type,
        data: x.data
      }
    )
  })
  return result;
}