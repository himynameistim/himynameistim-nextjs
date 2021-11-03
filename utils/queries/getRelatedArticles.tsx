import algoliasearch from 'algoliasearch';
import { AlgoliaHits, AlgoliaHit } from '../../Models/Algolia';

export const getRelatedArticles = async (tags: string[], count: number): Promise<AlgoliaHit[]> => {
  const algoliaClient = algoliasearch(process.env.algoliaAppId, process.env.algoliaApiKey);
  const algoliaIndex = algoliaClient.initIndex('Posts')
  
  const hits: AlgoliaHits = await algoliaIndex.search(tags.join(', '), {
    removeWordsIfNoResults: 'allOptional',
    optionalWords: tags,

  })
  return hits.hits.slice(0, count);
}