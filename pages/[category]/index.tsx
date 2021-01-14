import Head from 'next/head'
import styles from '../../styles/listing.module.scss'

import React, { useState } from "react"
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from "next/link"
import Layout from "../../layouts/layout"
import CategoryHeading from "../../components/category-heading"
import { CategoryPagination } from "../../components/categoryPagination"
import { Article, DisplayMode } from "../../components/article"
import { PostModel } from "../../Models/Post"
import { CategoryModel } from "../../Models/Category"
import { Client } from "../../utils/prismicHelpers";
import { getCategories, getCategoryIdByUid, getCategoryPosts } from "../../utils/queries"


const pageSize = 3;

const Category = ({page, totalPages, path, categoryName, posts} : { page: number, totalPages: number, path: string, categoryName: string, posts: Array<PostModel> }) => {
  return (
  <Layout>
  <Head>
    <title>{categoryName}</title>
  </Head>
    <CategoryHeading name={categoryName}></CategoryHeading>

    <div className={styles.listing}>
    {posts.map((post) => (
    <Article article={post} displayMode={DisplayMode.Listing}></Article>
    ))}

    <CategoryPagination page={page} totalPages={totalPages} path={path}></CategoryPagination>
    </div>
  </Layout>
  )
};

export const getStaticProps: GetStaticProps = async (context) => {
  const cat:string = context.params?.category ? context.params.category.toString() : '';
  
  var categoryId: string;
  var categoryName: any;
  if (cat == "blog")
  {
    categoryId = ""
    categoryName = "Blog"
  } else {
    const category : CategoryModel = await getCategoryIdByUid(cat);
    categoryId = category.id;
    categoryName = category.name;
  }
  
  const posts = await getCategoryPosts(categoryId, 1, pageSize);

  return {
    props: {
      page: 1,
      totalPages: posts?.totalPages,
      path: cat,
      posts: posts?.posts,
      categoryName: categoryName
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => { 
  const categories = await getCategories();

  var routes = categories.map(doc => `/${doc.uid}`)
  routes.push(`/blog`)

  return {
    paths: routes,
    fallback: false,
  }
}

export default Category;