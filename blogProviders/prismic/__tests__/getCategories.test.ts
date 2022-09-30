import "reflect-metadata";
import { container } from "tsyringe";
import { IGetCategories } from "../../blog/queries";
import { GetCategories } from "../queries";
import { PrismicClient } from "../prismicClient";

test("getCategories returns more than one category with a post count", async () => {
  const pc = new PrismicClient("himynameistim");
  const gc: IGetCategories = new GetCategories(pc);

  const categories = await gc.getAllCategories();

  expect(categories?.length).toBeGreaterThan(0);
  expect(categories[0].postCount).toBeGreaterThan(0);
});
