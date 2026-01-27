import Head from "next/head";

import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../../layouts/layout";
import CategoryHeading from "../../../components/category-heading";
import { CategoryPagination } from "../../../components/categoryPagination";
import { Article, DisplayMode } from "../../../components/article";
import { PostModel } from "../../../Models/Post";
import { CategoryModel } from "../../../Models/Categories";

import {
  GetAllCategories,
  GetAllPosts,
  GetCategory,
  GetCategoryPosts,
} from "@CMS/index";

const pageSize = 4;

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

        <div className="p-0 sm:px-8">
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
    const category: CategoryModel = await GetCategory(cat);
    categoryId = category.id!;
    categoryName = category.name;
  }

  const posts = await GetCategoryPosts(categoryId, pageNo, pageSize);

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
  const categories = GetAllCategories();
  const allPosts = GetAllPosts();

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
