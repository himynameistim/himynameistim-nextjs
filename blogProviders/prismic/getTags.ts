import { TagModel } from "../../Models/Tags";
import { PreviewData } from "next";
import { createClient } from "./prismicClient";

async function getPostCount(
  tag: string,
  previewData?: PreviewData
): Promise<number> {
  const client = createClient({ previewData });
  const posts = await client.getByTag(tag);
  return posts.total_results_size;
}

export const getTags = async (
  includeCount: boolean,
  previewData?: PreviewData
): Promise<TagModel[]> => {
  const client = createClient({ previewData });
  const prismicTags = await client.getTags();

  let tags: TagModel[];
  tags = [];

  for (const tag of prismicTags) {
    tags.push({
      tag,
      postCount: await getPostCount(tag, previewData),
    });
  }

  return tags;
};
