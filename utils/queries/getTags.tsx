import { ApolClient, Client } from "../prismicHelpers";
import gql from "graphql-tag";

import { TagModel } from "../../Models/Tags";

export const getTags = async (
  includeCount: boolean
): Promise<Array<TagModel>> => {
  var tags: Array<TagModel> = [];
  const res: any = await Client().getApi();

  for (let t of res.tags) {
    var count = 0;
    if (includeCount) {
      count = await getTagPostCount(t);
    }
    tags.push({
      tag: t,
      postCount: count,
    });
  }

  return tags;
};

const getTagPostCountQuery = gql`
  query latestPosts($tag: [String!]) {
    allPosts(tags: $tag) {
      totalCount
    }
  }
`;

export const getTagPostCount = async (tag?: string): Promise<number> => {
  const queryOptions = {
    query: getTagPostCountQuery,
    variables: { tag: tag },
  };

  return new Promise((resolve, reject) => {
    ApolClient.query(queryOptions)
      .then((postCount) => resolve(postCount.data.allPosts.totalCount))
      .catch((error) => {
        reject(error);
      });
  });
};
