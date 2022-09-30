import {
  GetAllPosts,
  GetCategories,
  GetCategory,
  GetCategoryPosts,
  GetLatestPosts,
  GetPost,
  GetTags,
  GetTagPosts,
} from "../queries";

test("queries are all defined", async () => {
  expect(GetAllPosts).toBeDefined();
  expect(GetCategories).toBeDefined();
  expect(GetCategory).toBeDefined();
  expect(GetCategoryPosts).toBeDefined();
  expect(GetLatestPosts).toBeDefined();
  expect(GetPost).toBeDefined();
  expect(GetTags).toBeDefined();
  expect(GetTagPosts).toBeDefined();
});
