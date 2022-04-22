import Head from "next/head";
import styles from "../../styles/listing.module.scss";

import React from "react";
import { container } from "tsyringe";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../layouts/layout";
import CategoryHeading from "../../components/category-heading";
import { CategoryPagination } from "../../components/categoryPagination";
import { Article, DisplayMode } from "../../components/article";
import { PostModel } from "../../Models/Post";
import { CategoryModel } from "../../Models/Categories";
import {
  getCategories,
  getCategoryIdByUid,
  getCategoryPosts,
  getTags,
} from "../../utils/queries";
import {
  iGetCategories,
  iGetCategory,
  iGetCategoryPosts,
  iGetLatestPosts,
  iGetTags,
} from "../../blogProviders/blog/queries";

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

  var categoryId: string;
  var categoryName: any;
  if (cat == "blog") {
    categoryId = "";
    categoryName = "Blog";
  } else {
    const categoryQuery = container.resolve<iGetCategory>("iGetCategory");
    const category: CategoryModel = await categoryQuery.getCategory(cat);
    categoryId = category.uid;
    categoryName = category.name;
  }

  const categoryPostsQuery =
    container.resolve<iGetCategoryPosts>("iGetCategoryPosts");
  const posts = await categoryPostsQuery.getCategoryPosts(
    categoryId,
    1,
    pageSize
  );

  return {
    props: {
      page: 1,
      totalPages: posts?.totalPages,
      path: cat,
      posts: posts?.posts,
      categoryName: categoryName,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categoryQuery = container.resolve<iGetCategories>("iGetCategories");
  const categories = await categoryQuery.getAllCategories();

  var routes = categories.map((doc) => `/${doc.uid}`);
  routes.push(`/blog`);

  return {
    paths: routes,
    fallback: false,
  };
};

export default Category;
