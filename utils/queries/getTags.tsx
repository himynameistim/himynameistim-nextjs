import Prismic from 'prismic-javascript'
import { ApolClient, Client } from '../prismicHelpers'
import gql from 'graphql-tag';

import { TagModel } from "../../Models/Tags"


export const getTags = async () : Promise<Array<TagModel>> => {
  var tags: Array<TagModel> = [];
  const res : any = await Client().getApi();

  for (var i = 0; i < res.tags.length; i++) {
    const count = await getTagPostCount(res.tags[i]);
    tags.push({
      tag: res.tags[i],
      postCount: count
    })
  }

  return tags;
}

const getTagPostCountQuery = gql`
query latestPosts($tag: [String!]) {
  allPosts (tags: $tag){
    totalCount    
  }
}`;

export const getTagPostCount = async (tag?: string) : Promise<number> => {
  const queryOptions = {
    query: getTagPostCountQuery,
    variables: { tag: tag }
  };

  return new Promise((resolve, reject) => {
    ApolClient.query(queryOptions).then(postCount =>
      resolve(postCount.data.allPosts.totalCount)
      ).catch(error => {
        reject(error);
      })
  })
}