export interface CategoryModel {
  uid: string;
  id?: string;
  name: string;
  postCount: number;
}

export interface CategoriesModel {
  [index: number]: CategoryModel;
}
