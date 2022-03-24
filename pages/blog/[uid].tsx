import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

// Project components
import Layout from "../../layouts/layout";
import { Article, DisplayMode } from "../../components/article";
import { PostModel } from "../../Models/Post";
import { RichText } from "prismic-reactjs";
import markdownToHtml from "../../utils/prism";

// Project functions & styles
import { queryRepeatableDocuments, getPostByUid } from "../../utils/queries";
import layoutStyles from "../../styles/layout-styles.module.scss";
import postStyles from "../../styles/post.module.scss";

/**
 * Post page component
 */
const Post = ({ post }: { post: PostModel }) => {
  if (post && post.data) {
    const hasTitle = RichText.asText(post.data.title).length !== 0;
    const title = hasTitle ? RichText.asText(post.data.title) : "Untitled";

    return (
      <Layout>
        <Head>
          <title>{title}</title>
          <script
            async
            defer
            src="https://static.cdn.prismic.io/prismic.js?new=true&repo=himynameistim"
          ></script>
          <meta property="og:title" content={title} />
          <meta property="og:type" content="article" />
          <meta
            property="og:url"
            content={"https://himynameistim.com/blog/" + post.uid}
          />
          <meta property="og:image" content={post.data.image.url} />
          <link
            rel="canonical"
            href={"https://himynameistim.com/blog/" + post.uid}
          />
        </Head>

        <hr className={layoutStyles.horizonalLine} />
        <div className={postStyles.post}>
          <main>
            <Article article={post} displayMode={DisplayMode.Article}></Article>
          </main>
        </div>
      </Layout>
    );
  }

  return null;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const uid: string = context.params?.uid ? context.params.uid.toString() : "";
  const post = await getPostByUid(uid, context.previewData);

  for (let bodyPart of post.data.body) {
    if (
      bodyPart.slice_type == "code_block" ||
      bodyPart.slice_type == "PostBodyCode_block"
    ) {
      bodyPart.primary.html = await markdownToHtml(
        bodyPart.primary.code,
        bodyPart.primary.language
      );
    }
  }

  return {
    props: {
      //preview,
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === "post"
  );
  return {
    paths: documents.map((doc) => `/blog/${doc.uid}`),
    fallback: false,
  };
};

export default Post;
