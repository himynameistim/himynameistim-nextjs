import Head from "next/head";
import styles from "../../../styles/listing.module.scss";

import React from "react";
import { container } from "tsyringe";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../../layouts/layout";
import CategoryHeading from "../../../components/category-heading";
import { CategoryPagination } from "../../../components/categoryPagination";
import { Article, DisplayMode } from "../../../components/article";
import { PostModel } from "../../../Models/Post";
import { CategoryModel } from "../../../Models/Categories";
import {
  IGetAllPosts,
  IGetCategories,
  IGetCategory,
  IGetCategoryPosts,
  IGetTags,
} from "../../../blogProviders/blog/queries";

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

  let categoryId: string;
  let categoryName: any;
  if (cat == "blog") {
    categoryId = "";
    categoryName = "Blog";
  } else {
    const categoryQuery = container.resolve<IGetCategory>("IGetCategory");
    const category: CategoryModel = await categoryQuery.getCategory(cat);
    categoryId = category.uid;
    categoryName = category.name;
  }

  const categoryPostsQuery =
    container.resolve<IGetCategoryPosts>("IGetCategoryPosts");
  const posts = await categoryPostsQuery.getCategoryPosts(
    categoryId,
    pageNo,
    pageSize
  );

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
  const categoryQuery = container.resolve<IGetCategories>("IGetCategories");
  const categories = categoryQuery.getAllCategories();
  const allPostsQuery = container.resolve<IGetAllPosts>("IGetAllPosts");
  const allPosts = allPostsQuery.getAllPosts();

  let routes = [];
  // add pages for category
  for (let category of await categories) {
    let pages = Math.ceil(category.postCount / pageSize);
    for (let p = 0; p < pages; p++) {
      routes.push(`/${category.uid}/page/${p + 1}`);
    }
  }

  let blogPages = Math.ceil((await allPosts).length / pageSize);
  for (var bp = 0; bp < blogPages; bp++) {
    routes.push(`/blog/page/${bp + 1}`);
  }

  return {
    paths: routes,
    fallback: false,
  };
};

export default Category;
