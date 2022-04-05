import { iGetLatestPosts } from "../../blog/queries";
import { getLatestPosts } from "../queries";
import * as contentful from "contentful";

test("getLatestPosts returns more than 0 posts", async () => {
  const client = contentful.createClient({
    space: "e6d5nx4sfe9x",
    accessToken: "EZJ8VW55il_k62d5qUX53SbU-L5-uRxUKBci4C27I-M",
  });

  const glp: iGetLatestPosts = new getLatestPosts(client);

  expect((await glp.getLatestPosts()).length).toBeGreaterThan(0);
});
