import { iGetCategory } from "../../blog/queries";
import { getCategory } from "../getCategory";

test("getCategory returns category with the id given", async () => {
  const gc: iGetCategory = new getCategory();

  expect((await gc.getCategory("sitecore")).id).toBe("sitecore");
});
