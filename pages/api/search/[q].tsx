import algoliasearch from 'algoliasearch';

export default async function handler(req, res) {
  const {
    query: { q },
  } = req

  const algoliaClient = algoliasearch(process.env.algoliaAppId, process.env.algoliaApiKey);

  const algoliaIndex = algoliaClient.initIndex('Posts')
 
  algoliaIndex.search(req.query.q)
    .then(({ hits }) => {
      const result = hits.map(x => {
        return {
        title: x.title,
        url: x.objectID
        }
      })
      res.status(200).json(result)
    })

}