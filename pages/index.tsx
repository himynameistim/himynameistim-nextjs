import Head from "next/head";

import React from "react";
import { container } from "tsyringe";
import { GetStaticProps } from "next";
import Layout from "../layouts/layout";
import { FeaturedRow1, FeaturedRow1Model } from "../components/featured-row-1";
import SectionHeading from "../components/section-heading";
import { iGetLatestPosts } from "../blogProviders/blog/getLatestPosts";

export default function Home({
  latestPosts,
  webDevelopmentPosts,
  sitecorePosts,
  devOpsPosts,
}: {
  latestPosts: FeaturedRow1Model;
  webDevelopmentPosts: FeaturedRow1Model;
  sitecorePosts: FeaturedRow1Model;
  devOpsPosts: FeaturedRow1Model;
}) {
  return (
    <Layout>
      <Head>
        <title>Hi My Name Is Tim</title>
      </Head>
      <SectionHeading heading="Latest Posts" link="blog"></SectionHeading>
      <FeaturedRow1 posts={latestPosts}></FeaturedRow1>
      <SectionHeading
        heading="Web Development"
        link="web-development"
      ></SectionHeading>
      <FeaturedRow1 posts={webDevelopmentPosts}></FeaturedRow1>
      <SectionHeading heading="Sitecore" link="sitecore"></SectionHeading>
      <FeaturedRow1 posts={sitecorePosts}></FeaturedRow1>
      <SectionHeading heading="Devops" link="devops"></SectionHeading>
      <FeaturedRow1 posts={devOpsPosts}></FeaturedRow1>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const instance = container.resolve<iGetLatestPosts>("iGetLatestPosts");

  const latestPosts = await instance.getLatestPosts();
  const webDevelopmentPosts = await instance.getLatestPosts("X8kFhxIAACcAn9oY");
  const devOpsPosts = await instance.getLatestPosts("X8kFlRIAACkAn9pa");
  const sitecorePosts = await instance.getLatestPosts("X8kFeBIAACkAn9nV");

  return {
    props: {
      latestPosts: latestPosts,
      devOpsPosts: devOpsPosts,
      sitecorePosts: sitecorePosts,
      webDevelopmentPosts: webDevelopmentPosts,
    },
  };
};
