import type { NextApiRequest, NextApiResponse } from "next";
import { IGetAllPosts } from "blogProviders/blog/getAllPosts";
import { container } from "tsyringe";
import { PostModel } from "@Models/Post";

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
  const getAllPostsQuery = container.resolve<IGetAllPosts>("IGetAllPosts");
  const posts = await getAllPostsQuery.getAllPosts();

  res.status(200).json(createSitemap(posts));
};
