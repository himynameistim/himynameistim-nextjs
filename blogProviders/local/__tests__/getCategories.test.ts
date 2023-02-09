import { IGetCategories } from "../../blog/queries";
import { GetCategories } from "../queries";

test("getAllCategories returns more than 0 category", async () => {
  const gc: IGetCategories = new GetCategories();

  expect((await gc.getAllCategories()).length).toBeGreaterThan(0);
});
