import { GetCategoryPosts } from "..";

test("getCategoryPosts returns more than 0 posts", async () => {
  expect(
    (await GetCategoryPosts("sitecore", 1, 1)).posts.length
  ).toBeGreaterThan(0);
});
