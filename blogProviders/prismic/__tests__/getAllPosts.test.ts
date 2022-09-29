import { iGetAllPosts } from "../../blog/queries";
import { GetAllPosts } from "../getAllPosts";
import { PrismicClient } from "../prismicClient";

test("getAllPosts returns more than 0 posts", async () => {
  const pc = new PrismicClient("himynameistim");
  const gap: iGetAllPosts = new GetAllPosts(pc);

  expect((await gap.getAllPosts()).length).toBeGreaterThan(0);
});
