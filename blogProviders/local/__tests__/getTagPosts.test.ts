import { GetTagPosts } from "..";

test("getTagPosts returns more than 0 posts", async () => {
  expect((await GetTagPosts("sitecore", 1, 1)).posts.length).toBeGreaterThan(0);
});
