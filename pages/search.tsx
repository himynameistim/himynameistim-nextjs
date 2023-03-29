import Head from "next/head";
import Link from "next/link";

import React from "react";
import Layout from "../layouts/layout";
import CategoryHeading from "../components/category-heading";
import algoliasearch from "algoliasearch";
import { GetServerSideProps } from "next";
import { linkResolver } from "../prismic-configuration";
import { parseISO, format } from "date-fns";
import styles from "../styles/search-results.module.scss";

export default function Search({ data }: { data: AlgoliaHits }) {
  return (
    <Layout>
      <Head>
        <title>Hi My Name Is Tim</title>
      </Head>
      <CategoryHeading name="Search"></CategoryHeading>
      <div className={[styles.searchResults, "container"].join(" ")}>
        {data.hits.map((hit) => (
          <>
            <Link href={linkResolver({ uid: hit.objectID, type: "post" })}>
              <a>
                <h2>{hit.title}</h2>
              </a>
            </Link>
            <p>
              <Link href={`/` + hit.category.toLowerCase()}>
                <a>{hit.category}</a>
              </Link>{" "}
              -{" "}
              <time dateTime={hit.postDate?.toString()}>
                {format(parseISO(hit.postDate.toString()), "d LLLL yyyy")}
              </time>{" "}
              - {hit.tags.join(", ")}
            </p>
          </>
        ))}
      </div>
    </Layout>
  );
}

type AlgoliaHits = {
  hits: AlgoliaHit[];
};

export type AlgoliaHit = {
  identifier: string;
  title: string;
  objectID: string;
  postDate: Date;
  category: string;
  tags: [];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let content: AlgoliaHits;
  if (
    process.env.algoliaAppId &&
    process.env.algoliaApiKey &&
    context.query.s
  ) {
    const algoliaClient = algoliasearch(
      process.env.algoliaAppId,
      process.env.algoliaApiKey
    );
    const algoliaIndex = algoliaClient.initIndex("Posts");

    content = await algoliaIndex.search(context.query.s.toString());
  } else {
    content = {
      hits: [],
    };
  }
  return {
    props: { data: content }, // will be passed to the page component as props
  };
};
