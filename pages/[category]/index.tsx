import Head from 'next/head'
import styles from '../../styles/listing.module.scss'

import React, { useState } from "react"
import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from "../../layouts/layout"
import CategoryHeading from "../../components/category-heading"
import { Article, DisplayMode } from "../../components/article"
import { PostModel } from "../../Models/Post"
import { CategoryModel } from "../../Models/Category"
import { Client } from "../../utils/prismicHelpers";
import { getCategories, getCategoryIdByUid, getCategoryPosts } from "../../utils/queries"


const Category = ({categoryName, posts} : { categoryName: string, posts: Array<PostModel> }) => {
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
    </div>
  </Layout>
  )
};

export const getStaticProps: GetStaticProps = async ({ params } : { params : { category: string} }) => {
  const category : CategoryModel = await getCategoryIdByUid(params.category);
  const posts = await getCategoryPosts(category.id, 1);
  return {
    props: {
      posts,
      categoryName: category.name
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => { 
  const categories = await getCategories();

  var routes = categories.map(doc => `/${doc.uid}`)

  return {
    paths: routes,
    fallback: false,
  }
}

export default Category;