import algoliasearch from 'algoliasearch';
import { getAllPosts } from '../../utils/queries'

export default async function handler(req, res) {
  const algoliaClient = algoliasearch(process.env.algoliaAppId, process.env.algoliaApiKey);
  const posts = await getAllPosts();

  const algoliaIndex = algoliaClient.initIndex('Posts')
  const algoliaObjectids = await algoliaIndex
    .saveObjects(posts)
    .catch((err) => res.json(err))

  if (algoliaObjectids) {
    res.json({
      message:
        'Algolia Posts index has been updated with all posts from Prismic.'
    })
  }
}