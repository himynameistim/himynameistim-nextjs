import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { useState } from "react"
import Layout from "../layouts/layout"
import FeaturedRow1 from "../components/featured-row-1"
import SectionHeading from '../components/section-heading'
import { queryLatestPosts } from 'utils/queries'


import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";

export default function Home() {
  return (
  <Layout>
  <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <SectionHeading heading="Web Development"></SectionHeading>
    <FeaturedRow1></FeaturedRow1>
    <SectionHeading heading="Sitecore"></SectionHeading>
    <FeaturedRow1></FeaturedRow1>
    <SectionHeading heading="Devops"></SectionHeading>
    <FeaturedRow1></FeaturedRow1>


    <div className={styles.main}></div>
  </Layout>
  )
};

export async function getStaticProps() {

  const latestPosts = await queryLatestPosts("X8kFlRIAACkAn9pa");

  

  return {
    props: {
      latestPosts: latestPosts
    }
   // latestPosts: latestPosts
  }
}