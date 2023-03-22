import type { NextApiRequest, NextApiResponse } from "next";

import algoliasearch from "algoliasearch";

type AlgoliaHits = {
  hits: AlgoliaHit[];
};

export type AlgoliaHit = {
  identifier: string;
  title: string;
  objectID: string;
};

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (!req.query.q) {
    res.status(400).json({ message: "No query value supplied" });
    return;
  }

  if (process.env.algoliaAppId && process.env.algoliaApiKey) {
    const algoliaClient = algoliasearch(
      process.env.algoliaAppId,
      process.env.algoliaApiKey
    );
    const algoliaIndex = algoliaClient.initIndex("Posts");
    const content: AlgoliaHits = await algoliaIndex.search(
      req.query.q.toString()
    );
    res.status(200).json(content.hits);
  }
}
