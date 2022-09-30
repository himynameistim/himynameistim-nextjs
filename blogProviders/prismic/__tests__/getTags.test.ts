import "reflect-metadata";
import { container } from "tsyringe";
import { PrismicClient } from "../prismicClient";
import { IGetTags } from "../../blog/queries";
import { GetTags } from "../queries";

test("getTags returns more than 0 tags", async () => {
  const pc = new PrismicClient("himynameistim");
  const gt: IGetTags = new GetTags(pc);

  expect((await gt.getTags(true)).length).toBeGreaterThan(0);
}, 100000);
