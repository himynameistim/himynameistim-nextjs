import { GetTags } from "..";

test("getTags returns more than 0 tags", async () => {
  expect((await GetTags(true)).length).toBeGreaterThan(0);
}, 100000);
