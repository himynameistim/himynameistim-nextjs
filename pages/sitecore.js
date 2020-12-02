import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { useState } from "react"
import Layout from "../layouts/layout"
import CategoryHeading from "../components/category-heading"
import FeaturedLink1 from "../components/featured-link-1"
import FeaturedLink2 from "../components/featured-link-2"
import FeaturedLink3 from "../components/featured-link-3"
import FeaturedRow1 from "../components/featured-row-1"
import SectionHeading from '../components/section-heading'

export default function Home() {
  return (
  <Layout>
  <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <CategoryHeading name="Sitecore"></CategoryHeading>
    <FeaturedRow1></FeaturedRow1>
    <SectionHeading heading="Sitecore"></SectionHeading>
  
    <div className={styles.main}></div>
  </Layout>
  )
}

