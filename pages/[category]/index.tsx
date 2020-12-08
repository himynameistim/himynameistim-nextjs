import Head from 'next/head'
import styles from '../../styles/listing.module.scss'

import React, { useState } from "react"
import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from "../../layouts/layout"
import CategoryHeading from "../../components/category-heading"
import { Article, ArticleModel, DisplayMode } from "../../components/article"
import { Client } from "../../utils/prismicHelpers";
import { getCategories } from "../../utils/queries"

const Category = ({post} : { post: ArticleModel }) => {
  return (
  <Layout>
  <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <CategoryHeading name="Sitecore"></CategoryHeading>

    <div className={[styles.listing].join(" ")}>
      <Article article={post} displayMode={DisplayMode.Listing}></Article>
    </div>
  </Layout>
  )
};

export const getStaticProps: GetStaticProps = async ({ params } : { params : { category: string} }) => {
  const categoryName = params.category;
  const post = await Client().getByUID("post", 'why-is-my-session-id-changing-on-3d-secure-payments', {});
  return {
    props: {
      post
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => { 
  const categories = await getCategories();
  return {
    paths: categories.map(doc => `/${doc.name.toLowerCase()}`),
    fallback: false,
  }
}

export default Category;