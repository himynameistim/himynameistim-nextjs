import {
  getTags,
  getLatestPosts,
  getTagPosts,
  getCategories,
  getCategory,
  getCategoryPosts,
  getPost,
  getAllPosts,
} from "./queries";
import { DependencyContainer } from "tsyringe";

export function registerMethods(container: DependencyContainer) {
  container.register("IGetLatestPosts", getLatestPosts);
  container.register("IGetTags", getTags);
  container.register("IGetTagPosts", getTagPosts);
  container.register("IGetCategories", getCategories);
  container.register("IGetCategory", getCategory);
  container.register("IGetCategoryPosts", getCategoryPosts);
  container.register("IGetPost", getPost);
  container.register("IGetAllPosts", getAllPosts);
}
