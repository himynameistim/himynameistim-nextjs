import { GetTagPosts } from "..";

test("getTagPosts returns more than 0 posts", async () => {
  const res = await GetTagPosts("Sitecore", 1, 1);

  expect(res.posts.length).toBeGreaterThan(0);
});
