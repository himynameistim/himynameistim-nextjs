import Prismic from 'prismic-javascript'
import { Client, ApolClient } from '../prismicHelpers'

// Models
import { PostModel } from "../../Models/Post"

export interface getCategoryPostsResult {
  totalPages: number,
  posts: Array<PostModel>
}

export const getCategoryPosts = async (categoryId : string, page: number, pageSize: number) => {
  if (categoryId == null)
  {
    return null
  }

  const posts : any = await Client().query([
    Prismic.Predicates.at("document.type", "post"), 
    Prismic.Predicates.at('my.post.category', categoryId)],
    {
      pageSize: pageSize,
      page: page,
      orderings: "[my.post.post_date desc]"
    },
  )

  var result: getCategoryPostsResult = {
    posts: [],
    totalPages: posts.total_pages
  };
  
  posts.results.map((x: { uid: any; type: any; data: any; }) => {
    result.posts.push(
      {
        uid: x.uid,
        type: x.type,
        data: x.data
      }
    )
  })
  
  return result;
}