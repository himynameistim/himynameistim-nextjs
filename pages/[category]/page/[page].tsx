import Head from 'next/head'
import styles from '../../../styles/listing.module.scss'

import React, { useState } from "react"
import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from "../../../layouts/layout"
import CategoryHeading from "../../../components/category-heading"
import { Article, ArticleModel, DisplayMode } from "../../../components/article"
import { Client } from "../../../utils/prismicHelpers";
import { getCategories } from "../../../utils/queries"

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

  var routes = []; // categories.map(doc => `/${doc.name.toLowerCase()}`)
  // add pages for category
  for (var i = 0; i < categories.length; i++) {
    var pages = categories[i].postCount / 1;
    for (var x = 0; x < pages; x++) {
      routes.push(`/${categories[i].uid}/page/${x+1}`)
    }
  }

  return {
    paths: routes,
    fallback: false,
  }
}

export default Category;