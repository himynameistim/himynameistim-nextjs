import Prismic from 'prismic-javascript'
import { Client, ApolClient } from '../prismicHelpers'

// Models
import { PostModel } from "../../Models/Post"

const getCategoryIdByName = async (categoryName: string) => {
  const category = await Client().query([
    Prismic.Predicates.at("document.type", "categories"),
    Prismic.Predicates.at("my.categories.uid", categoryName)],
    {
      pageSize: 1,
      page: 1
    }
  )

  if (category.results.length > 0)
  {
    return category.results[0].id;
  } else {
    return null;
  }
}

export const getCategoryPosts = async (categoryName : string) => {
  const categoryId = await getCategoryIdByName(categoryName);
  if (categoryId == null)
  {
    return null
  }
  const posts : any = await Client().query([
    Prismic.Predicates.at("document.type", "post"), 
    Prismic.Predicates.at('my.post.category', categoryId)],
    {
      pageSize: 2,
      page: 1,
      orderings: "[my.post.post_date desc]"
    },
  )

  var result: Array<PostModel> = [];
  
  posts.results.map((x: { uid: any; type: any; data: any; }) => {
    result.push(
      {
        uid: x.uid,
        type: x.type,
        data: x.data
      }
    )
  })
  return result;
}