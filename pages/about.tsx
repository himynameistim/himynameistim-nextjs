import Head from 'next/head'

import React from "react"
import { GetStaticProps } from 'next'
import Layout from "../layouts/layout"
import CategoryHeading from "../components/category-heading"

import styles from '../styles/about.module.scss'

export default function Home() {
  return (
  <Layout>
  <Head>
    <title>About Tim</title>
  </Head>
    <CategoryHeading name='About'></CategoryHeading>
    <div className={styles.content}>
      <div className="container">
        <img src='/Tim Photo.jpg' className={styles.bioPhoto}></img>
        <h2>Tim Griffiths</h2>
        <p><b>Hi my name is Tim</b>, and I am Director of Sitecore Development at Lab, a Digital Agency in the UK. I am also a developer with many years experiance specialising in ASP.NET development.</p>
        <p>Outside of my main job I created Training Buddy a fitness tracking app for Windows Phone, which in it’s time topped the Health and Fitness category on the app store.</p>
        <p>I have awarded the Sitecore Technologist MVP award in 2017, 2018, 2019 and 2020.</p>
        <img src='/Sitecore_MVP_Technology_2020.jpg' className={styles.award}></img>
        <img src='/sitecore_mvp_technology_2019.jpg' className={styles.award}></img>
        <img src='/sitecore_mvp_logo_technology_2018.jpg' className={styles.award}></img>
        <img src='/sitecore_mvp_logo_technology_2017.png' className={styles.award}></img>
      </div>      
    </div>
    
  </Layout>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  


  return {
    props: {
    }
  }
}