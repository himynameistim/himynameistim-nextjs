import Head from 'next/head'
import styles from '../../../../styles/listing.module.scss'

import React, { useState } from "react"
import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from "../../../../layouts/layout"
import CategoryHeading from "../../../../components/category-heading"
import { CategoryPagination } from "../../../../components/categoryPagination"
import { Article, DisplayMode } from "../../../../components/article"
import { PostModel } from "../../../../Models/Post"
import { Client } from "../../../../utils/prismicHelpers";
import { CategoryModel } from "../../../../Models/Category"
import { getPostCount, getTagPosts, getTags } from "../../../../utils/queries"

const pageSize = 3;

const Tag = ({page, totalPages, path, tagName, posts} : { page: number, totalPages: number, path: string, tagName: string, posts: Array<PostModel> }) => {
  return (
  <Layout>
  <Head>
  <title>{tagName}</title>
  </Head>
  <CategoryHeading name={tagName}></CategoryHeading>

    <div className={styles.listing}>
    {posts.map((post) => (
    <Article article={post} displayMode={DisplayMode.Listing}></Article>
    ))}

    <CategoryPagination page={page} totalPages={totalPages} path={path}></CategoryPagination>
    </div>
  </Layout>
  )
};

export const getStaticProps: GetStaticProps = async (context) => {
  const tag:string = context.params?.tag ? context.params.tag.toString() : '';
  const pageNo:number = parseInt(context.params?.page ? context.params.page.toString() : '1');
  const allTags = await getTags();
  const tagName:string = allTags.find(x => x.toLowerCase() == tag) || '';
  const posts = await getTagPosts(tagName, pageNo, pageSize);
  
  
  return {
    props: {
      page: pageNo,
      totalPages: posts?.totalPages,
      path: 'tag/' + tag,
      posts: posts?.posts,
      tagName: "Tag: " + tagName
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {   
  const tags = await getTags();

  var routes = [];
  // add pages for category
  for (var i = 0; i < tags.length; i++) {
    const posts = await getTagPosts(tags[i], 1, pageSize);
    var pages = posts?.totalPages || 0;
    for (var x = 0; x < pages; x++) {
      routes.push(`/tag/${tags[i].toLowerCase()}/page/${x+1}`)
    }
  }


  return {
    paths: routes,
    fallback: false,
  }
}

export default Tag;