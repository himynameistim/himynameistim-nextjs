import { IGetPost } from "../../blog/queries";
import { GetPost } from "../getPost";

test("getPost returns post with the uid given", async () => {
  const gp: IGetPost = new GetPost();

  expect((await gp.getPost("1", false))?.uid).toBe("1");
});
