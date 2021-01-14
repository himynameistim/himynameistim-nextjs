import type { NextApiRequest, NextApiResponse } from 'next'

import { getAllPosts } from '../../utils/queries'
// Models
import { AlgoliaModel } from "../../Models/Algolia"

const createSitemap = (posts: AlgoliaModel[]) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${posts
      .map(post  => {
        return `
                <url>
                    <loc>${`https://www.himynameistim.com/blog/${post.objectID}`}</loc>
                    <lastmod>${post.postDate}</lastmod>
                </url>
            `;
      })
      .join('')}
</urlset>
`;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await getAllPosts([]);

  res.status(200).json(createSitemap(posts))
}