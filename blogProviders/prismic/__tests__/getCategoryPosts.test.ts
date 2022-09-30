import "reflect-metadata";
import { container } from "tsyringe";
import { IGetCategoryPosts } from "../../blog/queries";
import { GetCategoryPosts } from "../queries";
import { PrismicClient } from "../prismicClient";

test("getCategoryPosts returns more than 0 posts", async () => {
  const pc = new PrismicClient("himynameistim");
  const gcp: IGetCategoryPosts = new GetCategoryPosts(pc);

  expect(
    (await gcp.getCategoryPosts("X8kFeBIAACkAn9nV", 1, 1)).posts.length
  ).toBeGreaterThan(0);
});
