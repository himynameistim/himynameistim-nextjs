import "reflect-metadata";
import { container } from "tsyringe";
import { PrismicClient } from "../prismicClient";
import { IGetTagPosts } from "../../blog/queries";
import { GetTagPosts } from "..";

test("getTagPosts returns more than 0 posts", async () => {
  const pc = new PrismicClient("himynameistim");
  const gtp: IGetTagPosts = new GetTagPosts(pc);

  const res = await gtp.getTagPosts("Sitecore", 1, 1);

  expect(res.posts.length).toBeGreaterThan(0);
});
