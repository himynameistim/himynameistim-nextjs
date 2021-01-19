import Head from 'next/head'
import styles from '../../../styles/listing.module.scss'

import React, { useState } from "react"
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from "next/link"
import Layout from "../../../layouts/layout"
import CategoryHeading from "../../../components/category-heading"
import { CategoryPagination } from "../../../components/categoryPagination"
import { Article, DisplayMode } from "../../../components/article"
import { PostModel } from "../../../Models/Post"
import { CategoryModel } from "../../../Models/Category"
import { Client } from "../../../utils/prismicHelpers";
import { getCategories, getCategoryIdByUid, getCategoryPosts, getTagPosts, getTags } from "../../../utils/queries"


const pageSize = 3;

const Category = ({page, totalPages, path, tagName, posts} : { page: number, totalPages: number, path: string, tagName: string, posts: Array<PostModel> }) => {
  return (
  <Layout>
  <Head>
    <title>{tagName}</title>
  </Head>
    <CategoryHeading name={tagName}></CategoryHeading>

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
  const cat:string = context.params?.tag ? context.params.tag.toString() : '';
  
  var categoryId: string;
  var categoryName: any;
    const category : CategoryModel = await getCategoryIdByUid(cat);
    categoryId = category.id;
    categoryName = category.name;
  
  const posts = await getTagPosts(categoryId, 1, pageSize);

  return {
    props: {
      page: 1,
      totalPages: posts?.totalPages,
      path: cat,
      posts: posts?.posts,
      tagName: "Tag: " + categoryName
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => { 
  const tags = await getTags();

  var routes = tags.map(tag => `/tag/${tag.toLowerCase()}`)

  return {
    paths: routes,
    fallback: false,
  }
}

export default Category;