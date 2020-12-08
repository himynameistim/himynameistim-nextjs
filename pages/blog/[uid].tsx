import React from "react";
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from "next/head";

// Project components
import Layout from "../../layouts/layout"
import SectionHeading from '../../components/section-heading'
import { Article, ArticleModel, DisplayMode } from "../../components/article"
import { RichText, RichTextBlock } from "prismic-reactjs";

// Project functions & styles
import { queryRepeatableDocuments } from '../../utils/queries'
import { Client } from "../../utils/prismicHelpers";
import { QueryOptions } from "prismic-javascript/types/ResolvedApi";
import layoutStyles from "styles/layout-styles.module.scss"
import postStyles from "styles/post.module.scss"

/**
 * Post page component
 */
const Post = ({post} : { post: ArticleModel }) => {
  if (post && post.data) {
    
  const hasTitle = RichText.asText(post.data.title).length !== 0;
  const title = hasTitle ? RichText.asText(post.data.title) : "Untitled";

    return (
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>

        <hr className={[layoutStyles.horizonalLine, "mb-10"].join(" ")} />
        <SectionHeading heading="Devops"></SectionHeading>
        <div className={postStyles.post}>
        {/*<div className="container mx-auto mb-10">
        <div className="grid grid-cols-7 gap-4">
    <div className="col-span-5">*/}
            <Article article={post} displayMode={DisplayMode.Article}></Article>
          {/*</div>
          <div className="col-span-2">Right</div>
        </div>
          </div>*/}
        </div>
      </Layout>
    );
  }

  return null;
};

export const getStaticProps: GetStaticProps = async ({ params, preview = null, previewData = {} }: { params : { uid: string}, preview: any, previewData: QueryOptions}) => {
//const { ref } = previewData
  //const post = await Client().getByUID("post", params.uid, ref ? { ref } : null) || {}
  const post = await Client().getByUID("post", params.uid, previewData) || {}
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
    fallback: true,
  }
}

export default Post;
