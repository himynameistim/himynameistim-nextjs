import React from "react"
import Link from "next/link"
import linkStyles from "../styles/featured-row-1.module.scss"
import { linkResolver } from '../prismic-configuration';

import { FeaturedPost } from "../Models/FeaturedPost"

export interface FeaturedRow1Model {
  [index: number]: FeaturedPost;
}

export function FeaturedRow1({ posts }: {posts: FeaturedRow1Model}) {
    return (
  <div className="container mx-auto mb-10">
  <div className={[ linkStyles.row, "grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 md:grid-cols-12 grid-flow-row md:grid-flow-col gap-4"].join(" ")}>
    <Link href={linkResolver(posts[0])}>
    <a className={[ linkStyles.mainBlock, "md:col-span-5 md:row-span-2 pt-8 flex justify-center items-center grid place-items-end place-content-end bg-cover"].join(" ")} style={{ backgroundImage: "url(" + posts[0].image.url + "&fit=crop&max-w=630&max-h=400)" }}>
      <div className="bg-white w-5/6 p-8">
        <div className="text-highlight mb-1">{ posts[0].category}</div>
    <div className="text-2xl font-semibold mb-2">{ posts[0].title}</div>
        <div className="text-xs">October 4, 2020</div>
      </div>    
    </a>
    </Link>
    { posts[1] && posts[1].image &&
    <Link href={linkResolver(posts[1])}>
    <a className={[ linkStyles.secondBlock, "md:col-span-4 md:row-span-2 p-8 flex justify-center items-center bg-cover"].join(" ")} style={{ backgroundImage: "url(" + posts[1].image.url + "&fit=crop&max-w=500&max-h=400)" }}>
      <div>
        <div className="text-white mb-1 text-center max-w-prose">{ posts[1].category}</div>
        <div className="text-white text-2xl font-semibold mb-2 text-center max-w-min mx-auto">{ posts[1].title}</div>
        <div className="text-white text-xs text-center max-w-prose">October 8, 2020</div>
      </div>
    </a>
    </Link>
    }
    { posts[2] && 
    <Link href={linkResolver(posts[2])}>
    <a className={[ linkStyles.finalBlocks, "md:col-span-3 md:row-span-1 pt-8 flex justify-center items-center grid place-content-end bg-cover"].join(" ")} style={{ backgroundImage: "url(" + posts[2].image.url + "&fit=crop&max-w=372&max-h=192)" }}>
      <div className="bg-white w-5/6 p-4 mx-auto">
    <div className="text-highlight mb-1 text-xs text-center">{ posts[2].category}</div>
        <div className="text-sm font-semibold text-center">{ posts[2].title}</div>
      </div>
    </a>
    </Link>
    }
    { posts[3] && 
    <Link href={linkResolver(posts[3])}>
    <a className={[ linkStyles.finalBlocks, "md:col-span-3 md:row-span-1 pt-8 flex justify-center items-center grid place-content-end bg-cover"].join(" ")} style={{ backgroundImage: "url(" + posts[3].image.url + "&fit=crop&max-w=372&max-h=192)" }}>
      <div className="bg-white w-5/6 p-4 mx-auto">
        <div className="text-highlight mb-1 text-xs text-center">{ posts[3].category}</div>
        <div className="text-sm font-semibold text-center">{ posts[3].title}</div>
      </div>
    </a>
    </Link>
    }
  </div>
  </div>
    )
}
  