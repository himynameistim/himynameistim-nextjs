export interface CategoryModel {
  id: number,
  name: string,
  postCount: number
}

export interface CategoriesModel {
  [index: number]: CategoryModel;
}