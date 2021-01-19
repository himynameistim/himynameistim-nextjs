import Prismic from 'prismic-javascript'
import { Client, ApolClient } from '../prismicHelpers'
import markdownToHtml from "../prism"

// Models
import { PostModel } from "../../Models/Post"

export interface getTagPostsResult {
  totalPages: number,
  posts: Array<PostModel>
}

export const getTagPosts = async (categoryId : string, page: number, pageSize: number) => {
  if (categoryId == null)
  {
    return null
  }

  var queryParams = [
    Prismic.Predicates.at("document.type", "post")]

  if (categoryId != "")
  {
    queryParams.push(Prismic.Predicates.at('document.tags', [categoryId]));
  }


  const posts : any = await Client().query(queryParams,
    {
      pageSize: pageSize,
      page: page,
      orderings: "[my.post.post_date desc]"
    },
  )

  var result: getTagPostsResult = {
    posts: [],
    totalPages: posts.total_pages
  };
  
  posts.results.map((x: { uid: any; type: any; data: any; tags: [] }) => {
    result.posts.push(
      {
        uid: x.uid,
        type: x.type,
        data: {
          title: x.data.title,
          post_date: x.data.post_date,
          image: x.data.image,
          body: x.data.body,
          category: x.data.category,
          _meta: {
            tags: x.tags
          }
         }
      }
    )
  })

  for (var i = 0; i < result.posts.length; i++) {
    for (var x = 0; x < result.posts[i].data.body.length; x++) {
      if (result.posts[i].data.body[x].slice_type == 'code_block' ||result.posts[i].data.body[x].slice_type == 'PostBodyCode_block') {
        result.posts[i].data.body[x].primary.html = await markdownToHtml(result.posts[i].data.body[x].primary.code, result.posts[i].data.body[x].primary.language)
      }
    }
  }
  
  return result;
}