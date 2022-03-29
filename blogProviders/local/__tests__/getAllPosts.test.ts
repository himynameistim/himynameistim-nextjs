import { iGetAllPosts } from "../../blog/queries";
import { getAllPosts } from "../getAllPosts";

test("getAllPosts returns more than 0 posts", async () => {
  const gap: iGetAllPosts = new getAllPosts();

  expect((await gap.getAllPosts()).length).toBeGreaterThan(0);
});
