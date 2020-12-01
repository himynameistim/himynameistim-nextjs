import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { useState } from "react"
import Layout from "../layouts/layout"
import CategoryHeading from "../components/category-heading"
import FeaturedLink1 from "../components/featured-link-1"

export default function Home() {
  return (
  <Layout>
  <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <CategoryHeading name="About"></CategoryHeading>
    
    <div class="container mx-auto grid grid-cols-2 gap-4">
    <FeaturedLink1 category="Sitecore" title="HOW TO CREATE A CUSTOM DROPLIST IN SITECORE" date="October 4, 2020"></FeaturedLink1>
    <FeaturedLink1 category="Sitecore" title="HOW TO CREATE A CUSTOM DROPLIST IN SITECORE" date="October 4, 2020"></FeaturedLink1>
    <FeaturedLink1 category="Sitecore" title="HOW TO CREATE A CUSTOM DROPLIST IN SITECORE" date="October 4, 2020"></FeaturedLink1>
    </div>

    <div className={styles.main}></div>
  </Layout>
  )
}

