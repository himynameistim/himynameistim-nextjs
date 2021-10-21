import algoliasearch from 'algoliasearch';

type AlgoliaHits = {
  hits: AlgoliaHit[];
};

export type AlgoliaHit = {
  identifier: string;
  title: string;
  objectID: string;
}

export const getRelatedArticles = async (tags: string[]): Promise<AlgoliaHits> => {
  const algoliaClient = algoliasearch(process.env.algoliaAppId, process.env.algoliaApiKey);
  const algoliaIndex = algoliaClient.initIndex('Posts')
  
  const hits: AlgoliaHits = await algoliaIndex.search(tags.join(', '), {
    removeWordsIfNoResults: 'allOptional',
    optionalWords: tags,

  })
  return hits;
}