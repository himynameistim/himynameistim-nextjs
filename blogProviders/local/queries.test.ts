import {
  getAllPosts,
  getCategories,
  getCategory,
  getCategoryPosts,
  getLatestPosts,
  getPost,
  getTags,
  getTagPosts,
} from "./queries";

test("queries are all defined", async () => {
  expect(getAllPosts).toBeDefined();
  expect(getCategories).toBeDefined();
  expect(getCategory).toBeDefined();
  expect(getCategoryPosts).toBeDefined();
  expect(getLatestPosts).toBeDefined();
  expect(getPost).toBeDefined();
  expect(getTags).toBeDefined();
  expect(getTagPosts).toBeDefined();
});
