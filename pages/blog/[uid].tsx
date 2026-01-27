import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

// Project components
import Layout from "../../layouts/layout";
import { Article, DisplayMode } from "../../components/article";
import { PostModel } from "../../Models/Post";

// Project functions & styles
import { GetAllPosts, GetPost } from "@CMS/index";
import { InferGetStaticPropsType } from "next";

/**
 * Post page component
 */
function Post({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  if (post && post.data) {
    const title =
      post.data.heading?.length !== 0 ? post.data.heading : "Untitled";

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
          {post.data.image.url && (
            <meta property="og:image" content={post.data.image.url} />
          )}
          <link
            rel="canonical"
            href={"https://himynameistim.com/blog/" + post.uid}
          />
        </Head>

        <hr className="bg-heading-color h-[10px] border-0 mb-element" />
        <div className="p-0 sm:px-8">
          <main>
            <Article article={post} displayMode={DisplayMode.Article}></Article>
          </main>
        </div>
      </Layout>
    );
  }

  return null;
}

export const getStaticProps: GetStaticProps<{ post: PostModel }> = async (
  context
) => {
  const uid: string = context.params?.uid ? context.params.uid.toString() : "";
  const post = await GetPost(uid, context.previewData);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const documents = await GetAllPosts();
  return {
    paths: documents.map((doc) => `/blog/${doc.uid}`),
    fallback: false,
  };
};

export default Post;
