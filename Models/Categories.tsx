export interface CategoryModel {
  uid: string,
  name: string,
  postCount: number
}

export interface CategoriesModel {
  [index: number]: CategoryModel;
}