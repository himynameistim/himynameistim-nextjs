import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { useState } from "react"
import Layout from "../layouts/layout"
import CategoryHeading from "../components/category-heading"
import FeaturedLink1 from "../components/featured-link-1"
import FeaturedLink2 from "../components/featured-link-2"
import FeaturedLink3 from "../components/featured-link-3"

export default function Home() {
  return (
  <Layout>
  <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <CategoryHeading name="About"></CategoryHeading>
    {/*}
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 gap-4">
    <FeaturedLink1 colspan="col-span-5" rowspan="row-span-2" category="Sitecore" title="HOW TO CREATE A CUSTOM DROPLIST IN SITECORE" date="October 4, 2020"></FeaturedLink1>
    <FeaturedLink2 colspan="col-span-4" rowspan="row-span-2" category="Sitecore" title="HOW TO CREATE A CUSTOM DROPLIST IN SITECORE" date="October 4, 2020"></FeaturedLink2>
    <FeaturedLink3 colspan="col-span-3" rowspan="row-span-1" category="Sitecore" title="HOW TO CREATE A CUSTOM DROPLIST IN SITECORE" date="October 4, 2020"></FeaturedLink3>
    <FeaturedLink3 colspan="col-span-3" rowspan="row-span-1" category="Sitecore" title="HOW TO CREATE A CUSTOM DROPLIST IN SITECORE" date="October 4, 2020"></FeaturedLink3>
    </div>
    </div>
  */}

<div class="container mx-auto px-8">
  <div class="flex flex-wrap ">
    <div class="w-full flex flex-col sm:w-1/2 lg:w-5/12 pr-4">
      <div class="flex-1 grid place-items-end"  style={{ backgroundImage: "url(https://preview.colorlib.com/theme/eden/img/magazine/1.jpg)", minHeight: "400px" }}>
        <div class="bg-white w-5/6 p-8">
            <div className="text-highlight mb-1">Sitecore</div>
            <div className="text-2xl font-semibold mb-2">HOW TO CREATE A CUSTOM DROPLIST IN SITECORE</div>
            <div className="text-xs">October 4, 2020</div>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col sm:w-1/2 lg:w-4/12 pl-4 pr-4">
      <div class="flex-1" style={{ backgroundImage: "url(https://preview.colorlib.com/theme/eden/img/magazine/1.jpg)" }}>
        <div className="text-highlight mb-1 text-center max-w-prose">Dev Ops</div>
        <div className="text-2xl font-semibold mb-2 text-center max-w-min mx-auto">WHAT ARE AUTOMATED DEPLOYMENTS AND WHY DO I NEED THEM?</div>
        <div className="text-xs text-center max-w-prose">October 8, 2020</div>
      </div>
    </div>
    <div class="w-full flex flex-col sm:w-1/2 lg:w-3/12 pl-4">
      <div class="flex-1 flex flex-col">
          <div class="flex-1 mb-4" style={{ backgroundImage: "url(https://preview.colorlib.com/theme/eden/img/magazine/1.jpg)" }}>
1
          </div>
          <div class="flex-1 mt-4" style={{ backgroundImage: "url(https://preview.colorlib.com/theme/eden/img/magazine/1.jpg)" }}>
2
          </div>
      </div>
    </div>
  </div>
</div>

    <div className={styles.main}></div>
  </Layout>
  )
}

