import { iGetAllPosts } from "../../blog/queries";
import { getAllPosts } from "../getAllPosts";
import { prismicClient } from "../prismicClient";

test("getAllPosts returns more than 0 posts", async () => {
  const pc = new prismicClient("himynameistim");
  const gap: iGetAllPosts = new getAllPosts(pc);

  expect((await gap.getAllPosts()).length).toBeGreaterThan(0);
});
