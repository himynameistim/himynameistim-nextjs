import Head from 'next/head'
import styles from '../../styles/listing.module.scss'

import React, { useState } from "react"
import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from "../../layouts/layout"
import CategoryHeading from "../../components/category-heading"
import { Article, DisplayMode } from "../../components/article"
import { PostModel } from "../../Models/Post"
import { Client } from "../../utils/prismicHelpers";
import { getCategories, getCategoryPosts } from "../../utils/queries"


const Category = ({categoryName, posts} : { categoryName: string, posts: Array<PostModel> }) => {
  return (
  <Layout>
  <Head>
    <title>{categoryName}</title>
    <link rel="icon" href="/favicon.ico" />
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
  const categoryName = params.category;
  const posts = await getCategoryPosts(categoryName);
  const post = await Client().getByUID("post", 'why-is-my-session-id-changing-on-3d-secure-payments', {});
  return {
    props: {
      posts,
      categoryName: "foo"
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