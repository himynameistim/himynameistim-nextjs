export interface AlgoliaModel {
  objectID: string,
  type: string,
  title: string,
  category?: string,
  imageUrl?: string,
  tags: string,
  postDate: Date
}

export type AlgoliaHits = {
  hits: AlgoliaHit[];
};

export type AlgoliaHit = {
  identifier: string;
  title: string;
  objectID: string;
}
