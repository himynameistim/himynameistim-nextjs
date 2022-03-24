import Head from "next/head";
import styles from "../../../styles/listing.module.scss";

import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../../layouts/layout";
import CategoryHeading from "../../../components/category-heading";
import { CategoryPagination } from "../../../components/categoryPagination";
import { Article, DisplayMode } from "../../../components/article";
import { PostModel } from "../../../Models/Post";
import { getTagPosts, getTags } from "../../../utils/queries";

const pageSize = 3;

const Tag = ({
  page,
  totalPages,
  path,
  tagName,
  posts,
}: {
  page: number;
  totalPages: number;
  path: string;
  tagName: string;
  posts: Array<PostModel>;
}) => {
  return (
    <Layout>
      <Head>
        <title>{tagName}</title>
      </Head>
      <CategoryHeading name={tagName}></CategoryHeading>

      <div className={styles.listing}>
        {posts.map((post) => (
          <Article
            key={post.uid}
            article={post}
            displayMode={DisplayMode.Listing}
          ></Article>
        ))}

        <CategoryPagination
          page={page}
          totalPages={totalPages}
          path={path}
        ></CategoryPagination>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const tag: string = context.params?.tag ? context.params.tag.toString() : "";
  const allTags = await getTags(false);
  const tagName: string =
    allTags.find((x) => x.tag.toLowerCase().replace(" ", "-") == tag)?.tag ||
    "";
  const posts = await getTagPosts(tagName, 1, pageSize);

  return {
    props: {
      page: 1,
      totalPages: posts?.totalPages,
      path: "tag/" + tag,
      posts: posts?.posts,
      tagName: "Tag: " + tagName,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getTags(false);

  var routes = tags.map(
    (tag) => `/tag/${tag.tag.toLowerCase().replace(" ", "-")}`
  );

  return {
    paths: routes,
    fallback: false,
  };
};

export default Tag;
