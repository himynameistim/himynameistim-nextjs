import React from "react";
import { SliceZone } from "../components/post/SliceZone";
import { linkResolver } from "../prismic-configuration";
import type { PostModel } from "../Models/Post";
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
    <article className="container">
      <header>
        {hasImage && (
          <img
            src={image}
            height="400"
            width="1093"
            alt={title as string}
            loading="eager"
          />
        )}
        {displayMode == DisplayMode.Listing && (
          <a href={linkResolver(article)}>
            <h1>{title}</h1>
          </a>
        )}
        {displayMode == DisplayMode.Article && <h1>{title}</h1>}
        <p>
          <time dateTime={date.toString()}>{format(date, "d LLLL yyyy")}</time>
        </p>
      </header>
      <div>
        <SliceZone slices={article.data.body} />
      </div>
      <footer>
        Tagged:&nbsp;
        {article.data._meta.tags.map((tag) => (
          <a
            key={tag.toLowerCase().replace(" ", "-")}
            href={"/tag/" + tag.toLowerCase().replace(" ", "-")}
          >
            {tag}
          </a>
        ))}
      </footer>
    </article>
  );
}
