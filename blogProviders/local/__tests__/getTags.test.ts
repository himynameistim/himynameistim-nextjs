import { IGetTags } from "../../blog/queries";
import { getTags } from "../queries";

test("getTags returns more than 0 tags", async () => {
  const gt: IGetTags = new getTags();

  expect((await gt.getTags(true)).length).toBeGreaterThan(0);
});
