import { GetAllCategories } from "..";

test("getAllCategories returns more than 0 category", async () => {
  expect((await GetAllCategories()).length).toBeGreaterThan(0);
});
