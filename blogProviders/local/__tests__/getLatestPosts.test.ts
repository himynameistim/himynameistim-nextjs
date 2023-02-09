import { IGetLatestPosts } from "../../blog/queries";
import { GetLatestPosts } from "../queries";

test("getLatestPosts returns more than 0 posts", async () => {
  const glp: IGetLatestPosts = new GetLatestPosts();

  expect((await glp.getLatestPosts()).length).toBeGreaterThan(0);
});
