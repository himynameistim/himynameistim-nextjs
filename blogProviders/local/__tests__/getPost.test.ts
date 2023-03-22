import { GetPost } from "..";

test("getPost returns post with the uid given", async () => {
  expect((await GetPost("1", false))?.uid).toBe("1");
});
