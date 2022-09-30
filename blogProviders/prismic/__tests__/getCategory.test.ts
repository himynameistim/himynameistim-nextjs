import "reflect-metadata";
import { container } from "tsyringe";
import { IGetCategory } from "../../blog/queries";
import { GetCategory } from "../queries";
import { PrismicClient } from "../prismicClient";

test("getCategory returns category with the uid given", async () => {
  const pc = new PrismicClient("himynameistim");
  const gc: IGetCategory = new GetCategory(pc);

  expect((await gc.getCategory("X8kFlRIAACkAn9pa"))?.uid).toBe(
    "X8kFlRIAACkAn9pa"
  );
});
