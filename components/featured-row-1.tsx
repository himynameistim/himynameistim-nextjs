import React from "react";
import Link from "next/link";
import linkStyles from "../styles/featured-row-1.module.scss";
import { linkResolver } from "../prismic-configuration";
import { parseISO, format } from "date-fns";

import { FeaturedPost } from "../Models/FeaturedPost";

export interface FeaturedRow1Model {
  [index: number]: FeaturedPost;
}

export function FeaturedRow1({ posts }: { posts: FeaturedRow1Model }) {
  return (
    <div className={[linkStyles.featuredRow, "container"].join(" ")}>
      <div className={linkStyles.row}>
        <Link href={linkResolver(posts[0])}>
          <a
            className={linkStyles.mainBlock}
            style={{
              backgroundImage:
                "url(" + posts[0].image.url + "&fit=crop&max-w=630&max-h=400)",
            }}
          >
            <div>
              <div>{posts[0].category}</div>
              <div>{posts[0].title}</div>
              {posts[0].postDate && (
                <div>
                  {format(
                    parseISO(posts[0].postDate.toString()),
                    "d LLLL yyyy"
                  )}
                </div>
              )}
            </div>
          </a>
        </Link>
        {posts[1] && posts[1].image && (
          <Link href={linkResolver(posts[1])}>
            <a
              className={linkStyles.secondBlock}
              style={{
                backgroundImage:
                  "url(" +
                  posts[1].image.url +
                  "&fit=crop&max-w=500&max-h=400)",
              }}
            >
              <div>
                <div>{posts[1].category}</div>
                <div>{posts[1].title}</div>
                {posts[1].postDate && (
                  <div>
                    {format(
                      parseISO(posts[1].postDate.toString()),
                      "d LLLL yyyy"
                    )}
                  </div>
                )}
              </div>
            </a>
          </Link>
        )}
        {posts[2] && (
          <Link href={linkResolver(posts[2])}>
            <a
              className={linkStyles.finalBlocks}
              style={{
                backgroundImage:
                  "url(" +
                  posts[2].image.url +
                  "&fit=crop&max-w=372&max-h=192)",
              }}
            >
              <div>
                <div>{posts[2].category}</div>
                <div>{posts[2].title}</div>
              </div>
            </a>
          </Link>
        )}
        {posts[3] && (
          <Link href={linkResolver(posts[3])}>
            <a
              className={linkStyles.finalBlocks}
              style={{
                backgroundImage:
                  "url(" +
                  posts[3].image.url +
                  "&fit=crop&max-w=372&max-h=192)",
              }}
            >
              <div>
                <div>{posts[3].category}</div>
                <div>{posts[3].title}</div>
              </div>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
