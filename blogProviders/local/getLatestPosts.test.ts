import { iGetLatestPosts } from "../blog/queries";
import { getLatestPosts } from "./queries";

test("getLatestPosts returns more than 0 posts", async () => {
  const glp: iGetLatestPosts = new getLatestPosts();

  expect((await glp.getLatestPosts()).length).toBeGreaterThan(0);
});
