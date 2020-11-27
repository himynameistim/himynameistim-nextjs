import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React from "react"
import Layout from "../layouts/layout"
import CategoryHeading from "../components/category-heading"

export default function Home() {
  return (
  <Layout>
  <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <CategoryHeading name="About"></CategoryHeading>
    <div className={styles.main}></div>
  </Layout>
  )
}

