import { GetCategory } from "..";

test("getCategory returns category with the id given", async () => {
  expect((await GetCategory("sitecore")).uid).toBe("sitecore");
});
