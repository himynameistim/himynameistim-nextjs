import {
  getTags,
  getCategories,
  getCategory,
  getCategoryPosts,
  getPost,
  getAllPosts,
} from "./queries";
import { DependencyContainer } from "tsyringe";
import { prismicClient } from "./prismicClient";

export function registerMethods(container: DependencyContainer) {
  container.registerInstance(
    "prismicClient",
    new prismicClient("himynameistim")
  );
  //container.register("iGetLatestPosts", getLatestPosts);
  container.register("iGetTags", getTags);
  //container.register("iGetTagPosts", getTagPosts);
  container.register("iGetCategories", getCategories);
  container.register("iGetCategory", getCategory);
  container.register("iGetCategoryPosts", getCategoryPosts);
  container.register("iGetPost", getPost);
  container.register("iGetAllPosts", getAllPosts);
}
