import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { useState } from "react"
import { GetStaticProps } from 'next'
import Layout from "../layouts/layout"
import { FeaturedRow1, FeaturedRow1Model } from "../components/featured-row-1"
import SectionHeading from '../components/section-heading'
import { queryLatestPosts, getCategories } from '../utils/queries'


export default function Home({webDevelopmentPosts, sitecorePosts, devOpsPosts} :{
  webDevelopmentPosts: FeaturedRow1Model,
  sitecorePosts: FeaturedRow1Model,
  devOpsPosts: FeaturedRow1Model
}) {
  return (
  <Layout>
  <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <SectionHeading heading="Web Development"></SectionHeading>
    <FeaturedRow1 posts={webDevelopmentPosts}></FeaturedRow1>
    <SectionHeading heading="Sitecore"></SectionHeading>
    <FeaturedRow1 posts={sitecorePosts}></FeaturedRow1>
    <SectionHeading heading="Devops"></SectionHeading>
    <FeaturedRow1 posts={devOpsPosts}></FeaturedRow1>


    <div className={styles.main}></div>
  </Layout>
  )
};

export const getStaticProps: GetStaticProps = async () => {

  const devOpsPosts = await queryLatestPosts("X8kFlRIAACkAn9pa");
  const sitecorePosts = await queryLatestPosts("X8kFeBIAACkAn9nV");
  const webDevelopmentPosts = await queryLatestPosts("X8kFhxIAACcAn9oY");
  const categories = await getCategories();

  return {
    props: {
      devOpsPosts: devOpsPosts,
      sitecorePosts: sitecorePosts,
      webDevelopmentPosts: webDevelopmentPosts
    }
  }
}