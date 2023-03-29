export interface FeaturedPost {
  uid: string;
  type: string;
  title: string;
  postDate?: Date | string;
  category?: string;
  image: {
    url: string;
  };
}
