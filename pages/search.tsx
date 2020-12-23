import Head from 'next/head'

import React from "react"
import Layout from "../layouts/layout"
import CategoryHeading from "../components/category-heading"
import algoliasearch from 'algoliasearch';
import { GetServerSideProps} from 'next'


export default function Search({ data }: { data: AlgoliaHits }) {
  return (
  <Layout>
  <Head>
    <title>Hi My Name Is Tim</title>
  </Head>
  <CategoryHeading name="Search"></CategoryHeading>
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
  
  if (process.env.algoliaAppId && process.env.algoliaApiKey && context.query.s)
  {
    const algoliaClient = algoliasearch(process.env.algoliaAppId, process.env.algoliaApiKey);
    const algoliaIndex = algoliaClient.initIndex('Posts')

    content = await algoliaIndex.search(context.query.s.toString());
  } else {
    content = {
      hits: []
    }
  }
  return {
    props: { data: content}, // will be passed to the page component as props
  }
}