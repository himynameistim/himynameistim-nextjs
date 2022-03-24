import { Client } from "../prismicHelpers";

// Models
import { CategoryModel } from "../../Models/Category";

export const getCategoryIdByUid = async (
  uid: string
): Promise<CategoryModel> => {
  const category = await Client.getByUID("categories", uid);
  var result: CategoryModel = {
    id: category.id,
    uid: category.uid!,
    name: category.data.name,
  };

  return result;
};
