import React from "react";
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from "next/head";

// Project components
import Layout from "../../layouts/layout"
import SectionHeading from '../../components/section-heading'
import { Article, DisplayMode } from "../../components/article"
import { PostModel } from "../../Models/Post"
import { RichText, RichTextBlock } from "prismic-reactjs"
import markdownToHtml from "../../utils/prism"

// Project functions & styles
import { queryRepeatableDocuments } from '../../utils/queries'
import { Client } from "../../utils/prismicHelpers"
import { QueryOptions } from "prismic-javascript/types/ResolvedApi"
import layoutStyles from "../../styles/layout-styles.module.scss"
import postStyles from "../../styles/post.module.scss"
import { getPostByUid } from "../../utils/queries"
import { getRelatedArticles } from "../../utils/queries/getRelatedArticles";

/**
 * Post page component
 */
const Post = ({post} : { post: PostModel }) => {
  if (post && post.data) {
    
  const hasTitle = RichText.asText(post.data.title).length !== 0;
  const title = hasTitle ? RichText.asText(post.data.title) : "Untitled";

  const category = post.data.category ? post.data.category.name : "Blog";
  const cropString = "&fit=crop&max-w=1200&max-h=627"
  const hasImage = (post.data.image != null && post.data.image.url != null);    
  const image = hasImage ? post.data.image.url + cropString : "";

    return (
      <Layout>
        <Head>
          <title>{title}</title>
          <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=himynameistim"></script>
          <meta property="og:title" content={title} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={ "https://himynameistim.com/blog/" + post.uid} />
          <meta property="og:image" content={post.data.image.url} />
          <link rel="canonical" href={ "https://himynameistim.com/blog/" + post.uid} />
        </Head>

        <hr className={layoutStyles.horizonalLine} />
        <div className={postStyles.post}>
            <Article article={post} displayMode={DisplayMode.Article}></Article>
        </div>
      </Layout>
    );
  }

  return null;
};

export const getStaticProps: GetStaticProps = async (context) => {
//const { ref } = previewData
  //const post = await Client().getByUID("post", params.uid, ref ? { ref } : null) || {}
  //const post = await Client().getByUID("post", params.uid, previewData) || {}

  const uid:string = context.params?.uid ? context.params.uid.toString() : '';
  const post = await getPostByUid(uid, context.previewData);

  for (var x = 0; x < post.data.body.length; x++) {
    if (post.data.body[x].slice_type == 'code_block' ||post.data.body[x].slice_type == 'PostBodyCode_block') {
      post.data.body[x].primary.html = await markdownToHtml(post.data.body[x].primary.code, post.data.body[x].primary.language)
    }
  }

  // Get Related Products
  if (typeof(context.params?.uid) == 'string')
  {
    const relatedArticles = await getRelatedArticles(post.data._meta.tags);
  
  }

  return {
    props: {
      //preview,
      post
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {  
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'post')
  return {
    paths: documents.map(doc => `/blog/${doc.uid}`),
    fallback: false,
  }
}

export default Post;
