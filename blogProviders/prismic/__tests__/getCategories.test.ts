import { GetAllCategories } from "..";

test("getCategories returns more than one category with a post count", async () => {
  const categories = await GetAllCategories();

  expect(categories?.length).toBeGreaterThan(0);
  expect(categories[0].postCount).toBeGreaterThan(0);
});
