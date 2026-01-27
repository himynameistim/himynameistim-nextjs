import React from "react";
import Link from "next/link";
import { linkResolver } from "../prismic-configuration";
import { parseISO, format } from "date-fns";

import { FeaturedPost } from "../Models/FeaturedPost";

export interface FeaturedRow1Model {
  [index: number]: FeaturedPost;
}

export function FeaturedRow1({ posts }: { posts: FeaturedRow1Model }) {
  return (
    <div className="mb-element container">
      <div className="min-h-100 gap-4 grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-flow-col md:grid-cols-12 md:grid-rows-2">
        <Link
          href={linkResolver(posts[0])}
          className="max-[639px]:min-h-100 max-[768px]:min-h-75 grid justify-center items-center place-content-end place-items-end bg-cover md:row-span-2 md:col-span-5"
          style={{
            backgroundImage:
              "url(" + posts[0].image.url + "&fit=crop&max-w=630&max-h=400)",
          }}
        >
          <div className="bg-white p-8 w-5/6">
            <div className="text-site-color mb-1">{posts[0].category}</div>
            <div className="mb-2 text-2xl font-semibold">{posts[0].title}</div>
            {posts[0].postDate && (
              <div className="text-xs">
                {format(parseISO(posts[0].postDate.toString()), "d LLLL yyyy")}
              </div>
            )}
          </div>
        </Link>
        {posts[1] && posts[1].image && (
          <Link
            href={linkResolver(posts[1])}
            className="max-[639px]:min-h-100 max-[768px]:min-h-75 p-8 flex justify-center items-center bg-cover md:row-span-2 md:col-span-4"
            style={{
              backgroundImage:
                "url(" + posts[1].image.url + "&fit=crop&max-w=500&max-h=400)",
            }}
          >
            <div className="text-white text-center">
              <div className="mb-1 max-w-[65ch]">{posts[1].category}</div>
              <div className="max-w-min mb-2 text-2xl font-semibold mx-auto">{posts[1].title}</div>
              {posts[1].postDate && (
                <div className="max-w-[65ch] text-xs">
                  {format(
                    parseISO(posts[1].postDate.toString()),
                    "d LLLL yyyy"
                  )}
                </div>
              )}
            </div>
          </Link>
        )}
        {posts[2] && (
          <Link
            href={linkResolver(posts[2])}
            className="max-[639px]:min-h-75 max-[768px]:min-h-50 pt-8 grid place-content-end justify-center items-center bg-cover md:row-span-1 md:col-span-3"
            style={{
              backgroundImage:
                "url(" + posts[2].image.url + "&fit=crop&max-w=372&max-h=192)",
            }}
          >
            <div className="bg-white mx-auto w-5/6 p-4 text-center">
              <div className="text-site-color text-xs mb-1">{posts[2].category}</div>
              <div className="font-semibold text-sm">{posts[2].title}</div>
            </div>
          </Link>
        )}
        {posts[3] && (
          <Link
            href={linkResolver(posts[3])}
            className="max-[639px]:min-h-75 max-[768px]:min-h-50 pt-8 grid place-content-end justify-center items-center bg-cover md:row-span-1 md:col-span-3"
            style={{
              backgroundImage:
                "url(" + posts[3].image.url + "&fit=crop&max-w=372&max-h=192)",
            }}
          >
            <div className="bg-white mx-auto w-5/6 p-4 text-center">
              <div className="text-site-color text-xs mb-1">{posts[3].category}</div>
              <div className="font-semibold text-sm">{posts[3].title}</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
