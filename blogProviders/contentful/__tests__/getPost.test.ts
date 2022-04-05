import { iGetPost } from "../../blog/queries";
import { getPost } from "../getPost";
import * as contentful from "contentful";

test("getPost returns post with the uid given", async () => {
  const client = contentful.createClient({
    space: "e6d5nx4sfe9x",
    accessToken: "EZJ8VW55il_k62d5qUX53SbU-L5-uRxUKBci4C27I-M",
  });

  const gp: iGetPost = new getPost(client);

  expect((await gp.getPost("2beV6KqvOOzmslFCZfaOfC", false)).uid).toBe(
    "2beV6KqvOOzmslFCZfaOfC"
  );
});
