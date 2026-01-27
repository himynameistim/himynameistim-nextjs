import Head from "next/head";

import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../layouts/layout";
import CategoryHeading from "../../components/category-heading";
import { CategoryPagination } from "../../components/categoryPagination";
import { Article, DisplayMode } from "../../components/article";
import { PostModel } from "../../Models/Post";
import { CategoryModel } from "../../Models/Categories";

import { GetAllCategories, GetCategory, GetCategoryPosts } from "@CMS/index";

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

  let categoryId: string | null;
  let categoryName: any;
  if (cat == "blog") {
    categoryId = null;
    categoryName = "Blog";
  } else {
    const category: CategoryModel = await GetCategory(cat);
    categoryId = category.id!;
    categoryName = category.name;
  }

  const posts = await GetCategoryPosts(categoryId, 1, pageSize);

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
  const categories = await GetAllCategories();

  let routes = categories.map((doc) => `/${doc.uid}`);
  routes.push(`/blog`);

  return {
    paths: routes,
    fallback: false,
  };
};

export default Category;
