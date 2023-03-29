import { GetPost } from "..";

test("getPost returns post with the uid given", async () => {
  expect(
    (
      await GetPost(
        "fixing-unexpected-unknown-at-rule-tailwind-in-sonar",
        false
      )
    )?.uid
  ).toBe("fixing-unexpected-unknown-at-rule-tailwind-in-sonar");
});
