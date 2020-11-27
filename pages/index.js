import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React from "react"
import Layout from "../layouts/layout"
import CategoryHeading from "../components/category-heading"

export default function Home() {
  return (
    <div>
    <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Layout>
    <CategoryHeading name="About"></CategoryHeading>
<div className={styles.main}></div>
  </Layout>
  </div>
  )
}

