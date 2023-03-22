import { GetCategoryPosts } from "..";

test("getCategoryPosts returns more than 0 posts", async () => {
  expect(
    (await GetCategoryPosts("X8kFeBIAACkAn9nV", 1, 1)).posts.length
  ).toBeGreaterThan(0);
});

test("getCategoryPosts returns more than 0 posts for page 2", async () => {
  expect(
    (await GetCategoryPosts("X8kFeBIAACkAn9nV", 2, 1)).posts.length
  ).toBeGreaterThan(0);
});
