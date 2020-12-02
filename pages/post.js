import Head from 'next/head'

import React, { useState } from "react"
import Layout from "../layouts/layout"
import styles from "../styles/layout-styles.module.scss"

export default function Home() {
  return (
  <Layout>
  <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <hr className={[styles.horizonalLine, "mb-10"].join(" ")} />
    
  <div class="container mx-auto mb-10">
    <div class="grid grid-cols-7 gap-4">
      <div class="col-span-5">
        <img class="rounded-md" src="https://himynameistim.files.wordpress.com/2020/04/toys-4502721_1920.jpg?w=820&h=312&crop=1" />
        <div className={styles.post}>
        <h1>WHY IS MY SESSION ID CHANGING ON 3D SECURE PAYMENTS?</h1>
        <p>If you have a website where you are implementing 3D Secure payments, you may find that you have an issue where on receipt of the payment setup confirmation the users Session ID has changed with no apparent cause.</p>
        <p>Lets have a quick run through of the payment process in this scenario (this is roughly how SagePay and WorldPay both work):</p>
        <h2>INTRODUCING THE SAME SITE COOKIE POLICY</h2>
        <p>In 2020 a change made to how cookies function in browsers to defend against cross site scripting. Troy Hunt has a brilliant explanation of the issue with how cookies used to work and how this has changed here. I’m going to try a much shorter explanation;</p>
        <p>When a request is made from a browser, as part of the request all the cookie values for that domain are sent with the request. This will include one for the Session ID. The theory here is that because the cookies are only being sent to the domain which set them in the first place, then information is only being shared back with the place that set it to begin with, which is therefor safe.</p>
        </div>
      </div>
      <div class="col-span-2">Right</div>
    </div>
    </div>

  
  </Layout>
  )
}

