import "reflect-metadata";
import { container } from "tsyringe";
import { iGetPost } from "../../blog/queries";
import { GetPost } from "../getPost";
import { PrismicClient } from "../prismicClient";

test("getPost returns post with the uid given", async () => {
  const pc = new PrismicClient("himynameistim");
  const gp: iGetPost = new GetPost(pc);

  expect(
    (
      await gp.getPost(
        "fixing-unexpected-unknown-at-rule-tailwind-in-sonar",
        false
      )
    )?.uid
  ).toBe("fixing-unexpected-unknown-at-rule-tailwind-in-sonar");
});
