import { IGetCategory } from "../../blog/queries";
import { GetCategory } from "../getCategory";

test("getCategory returns category with the id given", async () => {
  const gc: IGetCategory = new GetCategory();

  expect((await gc.getCategory("sitecore")).uid).toBe("sitecore");
});
