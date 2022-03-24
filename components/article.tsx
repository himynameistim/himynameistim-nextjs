import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { SliceZone } from "../components/post";
import { linkResolver } from "../prismic-configuration";
import { PostModel } from "../Models/Post";
import { parseISO, format } from "date-fns";

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
  const hasTitle = RichText.asText(article.data.title).length !== 0;
  const title = hasTitle ? RichText.asText(article.data.title) : "Untitled";
  const hasImage = article.data.image != null && article.data.image.url != null;
  const image = hasImage ? article.data.image.url + cropString : "";
  const lowResImage = hasImage ? image + lowResString : "";
  const date = parseISO(article.data.post_date.toString());

  return (
    <article className="container">
      <header>
        {hasImage && (
          <Image
            placeholder="blur"
            blurDataURL={lowResImage}
            src={image}
            height="400"
            width="1093"
            layout="responsive"
            priority={true}
          />
        )}
        {displayMode == DisplayMode.Listing && (
          <Link href={linkResolver(article)}>
            <a>
              <h1>{title}</h1>
            </a>
          </Link>
        )}
        {displayMode == DisplayMode.Article && <h1>{title}</h1>}
        <p>
          <time dateTime={date.toString()}>{format(date, "d LLLL yyyy")}</time>
        </p>
      </header>
      <div>
        <SliceZone sliceZone={article.data.body} />
      </div>
      <footer>
        Tagged:&nbsp;
        {article.data._meta.tags.map((tag) => (
          <Link
            key={tag.toLowerCase().replace(" ", "-")}
            href={"/tag/" + tag.toLowerCase().replace(" ", "-")}
          >
            <a>{tag}</a>
          </Link>
        ))}
      </footer>
    </article>
  );
}
