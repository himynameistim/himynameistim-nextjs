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
  container.register("IGetLatestPosts", GetLatestPosts);
  container.register("IGetTags", GetTags);
  //container.register("IGetTagPosts", getTagPosts);
  container.register("IGetCategories", GetCategories);
  container.register("IGetCategory", GetCategory);
  container.register("IGetCategoryPosts", GetCategoryPosts);
  container.register("IGetPost", GetPost);
  container.register("IGetAllPosts", GetAllPosts);
}
