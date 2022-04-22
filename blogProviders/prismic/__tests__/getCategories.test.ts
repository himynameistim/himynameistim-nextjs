import "reflect-metadata";
import { container } from "tsyringe";
import { iGetCategories } from "../../blog/queries";
import { getCategories } from "../queries";
import { prismicClient } from "../prismicClient";

test("getCategories returns more than one category with a post count", async () => {
  const pc = new prismicClient("himynameistim");
  const gc: iGetCategories = new getCategories(pc);

  const categories = await gc.getAllCategories();

  expect(categories?.length).toBeGreaterThan(0);
  expect(categories[0].postCount).toBeGreaterThan(0);
});
