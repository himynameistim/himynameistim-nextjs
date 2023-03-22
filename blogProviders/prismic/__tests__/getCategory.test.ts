import { GetCategory } from "..";

test("getCategory returns category with the uid given", async () => {
  const cat = await GetCategory("general");

  expect(cat?.uid).toBe("general");
});
