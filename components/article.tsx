import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SliceZone } from "../components/post/SliceZone";
import { linkResolver } from "../prismic-configuration";
import { PostModel } from "../Models/Post";
import { format } from "date-fns";

export enum DisplayMode {
  Article,
  Listing,
}

export function Article({
  article,
  displayMode,
}: {
  article: PostModel;
  displayMode: DisplayMode;
}) {
  const cropString = "&fit=crop&max-w=1093&max-h=400";
  const lowResString = "&blur=200&px=16&auto=format";
  const hasTitle = article.data.heading?.length !== 0;
  const title = hasTitle ? article.data.heading : "Untitled";
  const hasImage = article.data.image != null && article.data.image.url != null;
  const image = hasImage ? article.data.image.url + cropString : "";
  const lowResImage = hasImage ? image + lowResString : "";
  const date = new Date(article.data.postDate);

  return (
    <article className="container mx-auto mb-element break-words sm:shadow-[0px_10px_20px_0px_rgba(221,221,221,0.3)]">
      <header>
        {hasImage && (
          <Image
            placeholder="blur"
            blurDataURL={lowResImage}
            src={image}
            height="400"
            width="1093"
            priority={true}
            alt={title as string}
            className="min-w-full"
          />
        )}
        {displayMode == DisplayMode.Listing && (
          <Link href={linkResolver(article)}>
            <h1 className="px-8 sm:px-[30px] lg:px-20 lg:pt-[25px] mb-0">{title}</h1>
          </Link>
        )}
        {displayMode == DisplayMode.Article && <h1 className="px-8 sm:px-[30px] lg:px-20 lg:pt-[25px] mb-0">{title}</h1>}
        <p className="italic text-sm m-0 px-8 sm:px-[30px] lg:px-20">
          <time dateTime={date.toString()}>{format(date, "d LLLL yyyy")}</time>
        </p>
      </header>
      <div className={displayMode === DisplayMode.Listing ? "px-8 sm:px-[30px] lg:px-20 pb-10" : "px-8 sm:px-[30px] lg:px-20 pb-5"}>
        <SliceZone slices={article.data.body} />
      </div>
      <footer className="text-main-text-color py-[15px] pb-[30px] mx-8 sm:mx-[30px] lg:mx-20 mb-element">
        Tagged:&nbsp;
        {article.data._meta.tags.map((tag, index, arr) => (
          <Link
            key={tag.toLowerCase().replace(" ", "-")}
            href={"/tag/" + tag.toLowerCase().replace(" ", "-")}
            className={index < arr.length - 1 ? "after:content-[',_']" : ""}
          >
            {tag}
          </Link>
        ))}
      </footer>
    </article>
  );
}
