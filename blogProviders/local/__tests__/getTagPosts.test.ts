import { IGetTagPosts } from "../../blog/queries";
import { getTagPosts } from "../queries";

test("getTagPosts returns more than 0 posts", async () => {
  const gtp: IGetTagPosts = new getTagPosts();

  expect(
    (await gtp.getTagPosts("sitecore", 1, 1)).posts.length
  ).toBeGreaterThan(0);
});
