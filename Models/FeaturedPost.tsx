export interface FeaturedPost {
  uid: string,
  type: string,
  title: string,
  postDate?: Date,
  category?: string,
  image: {
    url: string
  }
}
