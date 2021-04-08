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
        <p><b>Hi my name is Tim</b>, and I am Director of Sitecore Development at Lab, a Digital Agency in the UK. I am also a developer with many years experience specialising in ASP.NET development.</p>
        <p>Outside of my main job I created Training Buddy a fitness tracking app for Windows Phone, which in it’s time topped the Health and Fitness category on the app store.</p>
        <h2>What's with the toy pictures?</h2>
        <p>Quite simply websites with pictures have higher engagement rates, so if you want to create an engaging website you need pictures. If the content of your website is largely code examples or articles on backend tech then this creates a bit of an issue. There’s nothing to take a photo of and there’s only so many times you can have pictures of code that have been made to look a little artsy. </p>
        <p>So, I wanted something that’s fun that I hadn’t seen on other peoples blogs and decided on toys. At times they can be relevant, like a toy screaming or lego representing building blocks, but at worst there still a fun non-offensive lighthearted picture.</p>
        <h2>Awards</h2>
        <p>I have been awarded the Sitecore Technologist MVP award 5 years running from 2017 - 2021.</p>
        <img src='/Sitecore_MVP_Technology_2021.jpg' className={styles.award}></img>
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