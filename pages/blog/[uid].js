import React from "react";
import Head from "next/head";
import { RichText } from "prismic-reactjs";

import { queryRepeatableDocuments } from 'utils/queries'

// Project components
import Layout from "layouts/layout"
import { SliceZone } from "components/post"
import SectionHeading from 'components/section-heading'

// Project functions & styles
import { Client } from "utils/prismicHelpers";
import styles from "styles/layout-styles.module.scss"

/**
 * Post page component
 */
const Post = ({ post }) => {
  if (post && post.data) {

    const cropString = "&fit=crop&max-w=1093&max-h=400"

    const hasTitle = RichText.asText(post.data.title).length !== 0;
    const title = hasTitle ? RichText.asText(post.data.title) : "Untitled";
    const hasImage = post.data.image !== "undefined";    
    const image = hasImage ? post.data.image.url + cropString : "";
    return (
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <hr className={[styles.horizonalLine, "mb-10"].join(" ")} />
  

        <SectionHeading heading="Devops"></SectionHeading>

        <div class="container mx-auto mb-10">
        <div class="grid grid-cols-7 gap-4">
          <div class="col-span-5">
            { hasImage &&
            <img class="rounded-md" src={image} />
            }
            <div className={styles.post}>
            <h1>{title}</h1>
            <SliceZone sliceZone={post.data.body} />
            </div>
          </div>
          <div class="col-span-2">Right</div>
        </div>
        </div>
      </Layout>
    );
  }

  return null;
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData
  const post = await Client().getByUID("post", params.uid, ref ? { ref } : null) || {}
  return {
    props: {
      preview,
      post
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'post')
  return {
    paths: documents.map(doc => `/blog/${doc.uid}`),
    fallback: true,
  }
}

export default Post;
