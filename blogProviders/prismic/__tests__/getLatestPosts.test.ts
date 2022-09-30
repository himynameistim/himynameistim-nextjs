import "reflect-metadata";
import { container } from "tsyringe";
import { PrismicClient } from "../prismicClient";
import { IGetLatestPosts } from "../../blog/queries";
import { GetLatestPosts } from "../queries";

test("getLatestPosts returns more than 0 posts", async () => {
  const pc = new PrismicClient("himynameistim");
  const glp: IGetLatestPosts = new GetLatestPosts(pc);

  expect((await glp.getLatestPosts()).length).toBeGreaterThan(0);
});
