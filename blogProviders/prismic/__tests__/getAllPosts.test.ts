import { GetAllPosts } from "..";

test("getAllPosts returns more than 0 posts", async () => {
  expect((await GetAllPosts()).length).toBeGreaterThan(0);
});
