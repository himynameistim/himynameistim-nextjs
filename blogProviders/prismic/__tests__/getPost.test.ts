import "reflect-metadata";
import { container } from "tsyringe";
import { iGetPost } from "../../blog/queries";
import { getPost } from "../getPost";
import { prismicClient } from "../prismicClient";

test("getPost returns post with the uid given", async () => {
  const pc = new prismicClient("himynameistim");
  const gp: iGetPost = new getPost(pc);

  expect((await gp.getPost("Post1", false))?.uid).toBe("Post1");
});
