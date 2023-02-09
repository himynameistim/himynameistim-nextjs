import {
  GetTags,
  GetLatestPosts,
  GetTagPosts,
  GetCategories,
  GetCategory,
  GetCategoryPosts,
  GetPost,
  GetAllPosts,
} from "./queries";
import { DependencyContainer } from "tsyringe";

export function registerMethods(container: DependencyContainer) {
  container.register("IGetLatestPosts", GetLatestPosts);
  container.register("IGetTags", GetTags);
  container.register("IGetTagPosts", GetTagPosts);
  container.register("IGetCategories", GetCategories);
  container.register("IGetCategory", GetCategory);
  container.register("IGetCategoryPosts", GetCategoryPosts);
  container.register("IGetPost", GetPost);
  container.register("IGetAllPosts", GetAllPosts);
}
