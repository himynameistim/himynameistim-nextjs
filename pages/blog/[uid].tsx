import React from "react";
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from "next/head";
import { RichText, RichTextBlock } from "prismic-reactjs";

// Project components
import Layout from "../../layouts/layout"
import { SliceZone } from "../../components/post"
import SectionHeading from '../../components/section-heading'

// Project functions & styles
import { queryRepeatableDocuments } from '../../utils/queries'
import { Client } from "../../utils/prismicHelpers";
import styles from "styles/layout-styles.module.scss"
import { QueryOptions } from "prismic-javascript/types/ResolvedApi";

/**
 * Post page component
 */
const Post = ({ post }: {
  post: {
    data: {
      title: RichTextBlock[],
      image: {
        url: string
      },
      body: string
    }
  }
}) => {
  if (post && post.data) {

    const cropString = "&fit=crop&max-w=1093&max-h=400"

    const hasTitle = RichText.asText(post.data.title).length !== 0;
    const title = hasTitle ? RichText.asText(post.data.title) : "Untitled";
    const hasImage = post.data.image != null;    
    const image = hasImage ? post.data.image.url + cropString : "";
    return (
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <hr className={[styles.horizonalLine, "mb-10"].join(" ")} />
  

        <SectionHeading heading="Devops"></SectionHeading>

        <div className="container mx-auto mb-10">
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-5">
            { hasImage &&
            <img className="rounded-md" src={image} />
            }
            <div className={styles.post}>
            <h1>{title}</h1>
            <SliceZone sliceZone={post.data.body} />
            </div>
          </div>
          <div className="col-span-2">Right</div>
        </div>
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
