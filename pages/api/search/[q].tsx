import type { NextApiRequest, NextApiResponse } from 'next'

import algoliasearch from 'algoliasearch';

type AlgoliaHits = {
  hits: AlgoliaHit[];
};

export type AlgoliaHit = {
  identifier: string;
  title: string;
  objectID: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { q },
  } = req

  if (process.env.algoliaAppId && process.env.algoliaApiKey)
  {
    const algoliaClient = algoliasearch(process.env.algoliaAppId, process.env.algoliaApiKey);
    const algoliaIndex = algoliaClient.initIndex('Posts')
    const content: AlgoliaHits = await algoliaIndex.search(req.query.q.toString());
    res.status(200).json(content.hits)

    /*algoliaIndex.search(req.query.q)
      .then(({ hits }) => {
        const result = hits.map(x => {
          return {
          title: x.title,
          url: x.objectID
          }
        })
        res.status(200).json(result)
      })
    }*/
  }
}