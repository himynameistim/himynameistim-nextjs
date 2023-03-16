import type { NextApiRequest, NextApiResponse } from "next";

import algoliasearch from "algoliasearch";
import { container } from "tsyringe";
import { IGetAllPosts } from "blogProviders/blog/queries";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (process.env.algoliaAppId && process.env.algoliaApiKey) {
    const algoliaClient = algoliasearch(
      process.env.algoliaAppId,
      process.env.algoliaApiKey
    );
    const getAllPostsQuery = container.resolve<IGetAllPosts>("IGetAllPosts");
    const posts = await getAllPostsQuery.getAllPosts();

    const algoliaIndex = algoliaClient.initIndex("Posts");
    const algoliaObjectids = await algoliaIndex
      .saveObjects(posts)
      .catch((err) => res.json(err));

    if (algoliaObjectids) {
      res.json({
        message:
          "Algolia Posts index has been updated with all posts from Prismic.",
      });
    }
  }
};
