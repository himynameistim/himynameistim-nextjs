import Head from 'next/head'

import React from "react"
import Layout from "../layouts/layout"
import CategoryHeading from "../components/category-heading"
import algoliasearch from 'algoliasearch';
import { GetServerSideProps} from 'next'


export default function Search({ data, time, route }: { data: AlgoliaHits, time: string, route: string }) {
  return (
  <Layout>
  <Head>
    <title>Hi My Name Is Tim</title>
  </Head>
  <CategoryHeading name="Search"></CategoryHeading>
  <h1>{time}</h1>
  <h1>{route}</h1>
  {data.hits.map((hit) => (
    <h2>{hit.title}</h2>
  ))}
  </Layout>
  )
};

type AlgoliaHits = {
  hits: AlgoliaHit[];
};

export type AlgoliaHit = {
  identifier: string;
  title: string;
  objectID: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  var content: AlgoliaHits;
  var route: string;
  if (process.env.algoliaAppId && process.env.algoliaApiKey && context.query.s)
  {
    route = "key found"
    const algoliaClient = algoliasearch(process.env.algoliaAppId, process.env.algoliaApiKey);
    const algoliaIndex = algoliaClient.initIndex('Posts')

    content = await algoliaIndex.search(context.query.s.toString());
  } else {
    route = "else"
    content = {
      hits: []
    }
  }
  return {
    props: { data: content, time: Date.now().toString(), route: route }, // will be passed to the page component as props
  }
}