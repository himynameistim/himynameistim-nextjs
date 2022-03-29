import { iGetCategories } from "../../blog/queries";
import { getCategories } from "../queries";

test("getAllCategories returns more than 0 category", async () => {
  const gc: iGetCategories = new getCategories();

  expect((await gc.getAllCategories()).length).toBeGreaterThan(0);
});
