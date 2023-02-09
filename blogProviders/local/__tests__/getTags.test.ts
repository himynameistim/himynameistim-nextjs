import { IGetTags } from "../../blog/queries";
import { GetTags } from "../queries";

test("getTags returns more than 0 tags", async () => {
  const gt: IGetTags = new GetTags();

  expect((await gt.getTags(true)).length).toBeGreaterThan(0);
});
