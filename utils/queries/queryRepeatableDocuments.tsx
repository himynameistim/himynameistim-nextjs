import type { Document } from "prismic-javascript/types/documents";
import { Client } from "../prismicHelpers";

async function fetchDocs(
  page = 1,
  routes: Document[] = []
): Promise<Document[]> {
  const response = await Client().query("", { pageSize: 100, lang: "*", page });
  const allRoutes = routes.concat(response.results);
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocs(page + 1, allRoutes);
  }
  return [...new Set(allRoutes)];
}

/** Fetches all Prismic documents and filters them (eg. by document type).
 *  In production, you would probably query documents by type instead of filtering them.
 **/

interface Route {
  type: string;
  uid?: string;
}
export const queryRepeatableDocuments = async (
  filter: (s: Route) => boolean
): Promise<Route[]> => {
  const allRoutes = await fetchDocs();
  return allRoutes.filter(filter);
};
