import { IGetTagPosts } from "../../blog/queries";
import { GetTagPosts } from "../queries";

test("getTagPosts returns more than 0 posts", async () => {
  const gtp: IGetTagPosts = new GetTagPosts();

  expect(
    (await gtp.getTagPosts("sitecore", 1, 1)).posts.length
  ).toBeGreaterThan(0);
});
