import { IGetLatestPosts } from "../../blog/queries";
import { getLatestPosts } from "../queries";

test("getLatestPosts returns more than 0 posts", async () => {
  const glp: IGetLatestPosts = new getLatestPosts();

  expect((await glp.getLatestPosts()).length).toBeGreaterThan(0);
});
