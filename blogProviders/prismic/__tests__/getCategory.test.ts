import "reflect-metadata";
import { container } from "tsyringe";
import { iGetCategory } from "../../blog/queries";
import { getCategory } from "../queries";
import { prismicClient } from "../prismicClient";

test("getCategory returns category with the uid given", async () => {
  const pc = new prismicClient("himynameistim");
  const gc: iGetCategory = new getCategory(pc);

  expect((await gc.getCategory("devops"))?.uid).toBe("devops");
});
