import {
  GetTags,
  GetCategories,
  GetCategory,
  GetCategoryPosts,
  GetPost,
  GetAllPosts,
  GetLatestPosts,
} from "./queries";
import { DependencyContainer } from "tsyringe";
import { PrismicClient } from "./prismicClient";

export function registerMethods(container: DependencyContainer) {
  container.registerInstance(
    "prismicClient",
    new PrismicClient("himynameistim")
  );
  container.register("iGetLatestPosts", GetLatestPosts);
  container.register("iGetTags", GetTags);
  //container.register("iGetTagPosts", getTagPosts);
  container.register("iGetCategories", GetCategories);
  container.register("iGetCategory", GetCategory);
  container.register("iGetCategoryPosts", GetCategoryPosts);
  container.register("iGetPost", GetPost);
  container.register("iGetAllPosts", GetAllPosts);
}
