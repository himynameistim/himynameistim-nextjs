import type { NextApiRequest, NextApiResponse } from "next";
import { PostModel } from "@Models/Post";
import { GetAllPosts } from "@CMS/index";

const createSitemap = (
  posts: PostModel[]
) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${posts
      .map((post) => {
        return `
                <url>
                    <loc>${`https://himynameistim.com/blog/${post.uid}`}</loc>
                    <lastmod>${post.dateModified}</lastmod>
                </url>
            `;
      })
      .join("")}
</urlset>
`;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await GetAllPosts();

  res.status(200).json(createSitemap(posts));
};
