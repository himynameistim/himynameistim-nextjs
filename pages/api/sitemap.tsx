import { getAllPosts } from '../../utils/queries'

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
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

export default async function handler(req, res) {
  const posts = await getAllPosts();

  res.status(200).json(createSitemap(posts))
}