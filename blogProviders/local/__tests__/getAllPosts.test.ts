import { IGetAllPosts } from "../../blog/queries";
import { GetAllPosts } from "../getAllPosts";

test("getAllPosts returns more than 0 posts", async () => {
  const gap: IGetAllPosts = new GetAllPosts();

  expect((await gap.getAllPosts()).length).toBeGreaterThan(0);
});
