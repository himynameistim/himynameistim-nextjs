import { iGetTags } from "../../blog/queries";
import { getTags } from "../queries";

test("getTags returns more than 0 tags", async () => {
  const gt: iGetTags = new getTags();

  expect((await gt.getTags(true)).length).toBeGreaterThan(0);
});
