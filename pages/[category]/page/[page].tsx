import Head from "next/head";
import styles from "../../../styles/listing.module.scss";

import React, { useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../../layouts/layout";
import CategoryHeading from "../../../components/category-heading";
import { CategoryPagination } from "../../../components/categoryPagination";
import { Article, DisplayMode } from "../../../components/article";
import { PostModel } from "../../../Models/Post";
import { Client } from "../../../utils/prismicHelpers";
import { CategoryModel } from "../../../Models/Category";
import {
  getCategories,
  getCategoryIdByUid,
  getCategoryPosts,
  getPostCount,
} from "../../../utils/queries";

const pageSize = 3;

const Category = ({
  page,
  totalPages,
  path,
  categoryName,
  posts,
}: {
  page: number;
  totalPages: number;
  path: string;
  categoryName: string;
  posts: Array<PostModel>;
}) => {
  return (
    <Layout>
      <Head>
        <title>{categoryName}</title>
      </Head>
      <main>
        <CategoryHeading name={categoryName}></CategoryHeading>

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
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const cat: string = context.params?.category
    ? context.params.category.toString()
    : "";
  const pageNo: number = parseInt(
    context.params?.page ? context.params.page.toString() : "1"
  );

  var categoryId: string;
  var categoryName: any;
  if (cat == "blog") {
    categoryId = "";
    categoryName = "Blog";
  } else {
    const category: CategoryModel = await getCategoryIdByUid(cat);
    categoryId = category.id;
    categoryName = category.name;
  }

  const posts = await getCategoryPosts(categoryId, pageNo, pageSize);

  const categories = await getCategories();

  return {
    props: {
      page: pageNo,
      totalPages: posts?.totalPages,
      path: cat,
      posts: posts?.posts,
      categoryName: categoryName,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getCategories();

  var routes = [];
  // add pages for category
  for (var i = 0; i < categories.length; i++) {
    var pages = Math.ceil(categories[i].postCount / pageSize);
    for (var x = 0; x < pages; x++) {
      routes.push(`/${categories[i].uid}/page/${x + 1}`);
    }
  }

  var blogPages = Math.ceil((await getPostCount()) / pageSize);
  for (var x = 0; x < blogPages; x++) {
    routes.push(`/blog/page/${x + 1}`);
  }

  return {
    paths: routes,
    fallback: false,
  };
};

export default Category;
