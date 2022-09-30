import { IGetCategoryPosts } from "../../blog/queries";
import { getCategoryPosts } from "../queries";

test("getCategoryPosts returns more than 0 posts", async () => {
  const gcp: IGetCategoryPosts = new getCategoryPosts();

  expect(
    (await gcp.getCategoryPosts("sitecore", 1, 1)).posts.length
  ).toBeGreaterThan(0);
});
