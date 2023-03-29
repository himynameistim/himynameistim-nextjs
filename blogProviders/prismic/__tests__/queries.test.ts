import {
  GetAllPosts,
  GetAllCategories,
  GetCategory,
  GetCategoryPosts,
  GetLatestPosts,
  GetPost,
  GetTags,
  GetTagPosts,
} from "..";

test("queries are all defined", async () => {
  expect(GetAllPosts).toBeDefined();
  expect(GetAllCategories).toBeDefined();
  expect(GetCategory).toBeDefined();
  expect(GetCategoryPosts).toBeDefined();
  expect(GetLatestPosts).toBeDefined();
  expect(GetPost).toBeDefined();
  expect(GetTags).toBeDefined();
  expect(GetTagPosts).toBeDefined();
});
