import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { useState } from "react"
import { GetStaticProps } from 'next'
import Layout from "../layouts/layout"
import { FeaturedRow1, FeaturedRow1Model } from "../components/featured-row-1"
import SectionHeading from '../components/section-heading'
import { getLatestPosts, getCategories, getCategoryPosts } from '../utils/queries'


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
    <SectionHeading heading="Web Development" link="web-development"></SectionHeading>
    <FeaturedRow1 posts={webDevelopmentPosts}></FeaturedRow1>
    <SectionHeading heading="Sitecore" link="sitecore"></SectionHeading>
    <FeaturedRow1 posts={sitecorePosts}></FeaturedRow1>
    <SectionHeading heading="Devops" link="devops"></SectionHeading>
    <FeaturedRow1 posts={devOpsPosts}></FeaturedRow1>


    <div className={styles.main}></div>
  </Layout>
  )
};

export const getStaticProps: GetStaticProps = async () => {

  const devOpsPosts = await getLatestPosts("X8kFlRIAACkAn9pa");
  const sitecorePosts = await getLatestPosts("X8kFeBIAACkAn9nV");
  const webDevelopmentPosts = await getLatestPosts("X8kFhxIAACcAn9oY");
  //const posts = await getCategoryPosts("Sitecore")
  //const categories = await getCategories();

  return {
    props: {
      devOpsPosts: devOpsPosts,
      sitecorePosts: sitecorePosts,
      webDevelopmentPosts: webDevelopmentPosts
    }
  }
}