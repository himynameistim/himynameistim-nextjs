import { IGetPost } from "../../blog/queries";
import { getPost } from "../getPost";

test("getPost returns post with the uid given", async () => {
  const gp: IGetPost = new getPost();

  expect((await gp.getPost("1", false))?.uid).toBe("1");
});
