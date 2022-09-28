import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

// Project components
import Layout from "../../layouts/layout";
import { Article, DisplayMode } from "../../components/article";
import { CodeBlock, PostModel } from "../../Models/Post";
import markdownToHtml from "../../utils/prism";

// Project functions & styles
import layoutStyles from "../../styles/layout-styles.module.scss";
import postStyles from "../../styles/post.module.scss";
import { iGetPost } from "../../blogProviders/blog/queries";
import { container } from "tsyringe";
import { iGetAllPosts } from "../../blogProviders/blog/getAllPosts";

/**
 * Post page component
 */
const Post = ({ post }: { post: PostModel }) => {
  if (post && post.data) {
    const title = post.data.heading?.length !== 0 ? post.data.heading : "Untitled";

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
  const postQuery = container.resolve<iGetPost>("iGetPost");
  const post = await postQuery.getPost(uid, context.previewData);

  if (post) {
  for (let bodyPart of post.data.body) {
    if (
      bodyPart.sliceType == "code_block" ||
      bodyPart.sliceType == "PostBodyCode_block"
    ) {
      (bodyPart as CodeBlock).html = await markdownToHtml(
        (bodyPart as CodeBlock).code,
        (bodyPart as CodeBlock).language,
      );
    }
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
  const getAllPostsQuery = container.resolve<iGetAllPosts>("iGetAllPosts");
  const documents = await getAllPostsQuery.getAllPosts(
  );
  return {
    paths: documents.map((doc) => `/blog/${doc.uid}`),
    fallback: false,
  };
};

export default Post;
