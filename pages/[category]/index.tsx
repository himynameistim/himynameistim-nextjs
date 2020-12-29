import Head from 'next/head'
import styles from '../../styles/listing.module.scss'

import React, { useState } from "react"
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from "next/link"
import Layout from "../../layouts/layout"
import CategoryHeading from "../../components/category-heading"
import { CategoryPagination } from "../../components/categoryPagination"
import { Article, DisplayMode } from "../../components/article"
import { PostModel } from "../../Models/Post"
import { CategoryModel } from "../../Models/Category"
import { Client } from "../../utils/prismicHelpers";
import { getCategories, getCategoryIdByUid, getCategoryPosts } from "../../utils/queries"
import markdownToHtml from "../../utils/prism"

const pageSize = 3;

const Category = ({page, totalPages, path, categoryName, posts} : { page: number, totalPages: number, path: string, categoryName: string, posts: Array<PostModel> }) => {
  return (
  <Layout>
  <Head>
    <title>{categoryName}</title>
  </Head>
    <CategoryHeading name={categoryName}></CategoryHeading>

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
  const cat:string = context.params?.category ? context.params.category.toString() : '';
  const category : CategoryModel = await getCategoryIdByUid(cat);
  const posts = await getCategoryPosts(category.id, 1, pageSize);
  
  for (var i = 0; i < posts.posts.length; i++) {
    for (var x = 0; x < posts.posts[i].data.body.length; x++) {
      if (posts.posts[i].data.body[x].slice_type == 'code_block' ||posts.posts[i].data.body[x].slice_type == 'PostBodyCode_block') {

        var language: string;
        switch (posts.posts[i].data.body[x].primary.language) {
          case "HTML / XHTML / XML":
            language = "markup"
            break;
          case "CSS / SCSS":
            language = "css"
            break;
          case "C#":
            language = "csharp";
            break;
          case "Git":
            language = "git";
            break;
          case "JavaScript":
            language = "javascript";
            break;
          case "PowerShell":
            language = "powershell";
            break;
          case "React JSX":
            language = "jsx";
            break;
          case "React TSX":
            language = "tsx";
            break;
          case "Regex":
            language = "regex";
            break;
          case "SQL":
              language = "sql";
              break;
          case "TypeScript ":
            language = "typescript";
            break;
          default:
            language = "";
            break;
        }




        posts.posts[i].data.body[x].primary.html = await markdownToHtml(posts.posts[i].data.body[x].primary.code, language)
      }
    }
  }

  return {
    props: {
      page: 1,
      totalPages: posts?.totalPages,
      path: cat,
      posts: posts?.posts,
      categoryName: category.name
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => { 
  const categories = await getCategories();

  var routes = categories.map(doc => `/${doc.uid}`)

  return {
    paths: routes,
    fallback: false,
  }
}

export default Category;