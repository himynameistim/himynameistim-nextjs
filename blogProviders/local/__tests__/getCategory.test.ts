import { IGetCategory } from "../../blog/queries";
import { getCategory } from "../getCategory";

test("getCategory returns category with the id given", async () => {
  const gc: IGetCategory = new getCategory();

  expect((await gc.getCategory("sitecore")).uid).toBe("sitecore");
});
