import { GetLatestPosts } from "..";

test("getLatestPosts returns more than 0 posts", async () => {
  expect((await GetLatestPosts()).length).toBeGreaterThan(0);
});
