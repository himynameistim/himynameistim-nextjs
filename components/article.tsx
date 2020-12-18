import React from "react"
import Link from "next/link"
import { RichText, RichTextBlock } from "prismic-reactjs";
import { SliceZone } from "../components/post"
import { linkResolver } from "../prismic-configuration";
import { PostModel } from "../Models/Post";

export enum DisplayMode {
  Article,
  Listing
}

export function Article({ article, displayMode  }: {article: PostModel, displayMode: DisplayMode}) {

  const cropString = "&fit=crop&max-w=1093&max-h=400"
  const hasTitle = RichText.asText(article.data.title).length !== 0;
  const title = hasTitle ? RichText.asText(article.data.title) : "Untitled";
  const hasImage = article.data.image != null;    
  const image = hasImage ? article.data.image.url + cropString : "";

  return (
    <article className="container">
      <header>
        { hasImage &&
        <picture>
          <img src={image} />
        </picture>
        }
        { displayMode == DisplayMode.Listing && 
          <Link href={linkResolver(article)}><a>
          <h1>{title}</h1>
          </a></Link>
        }
        { displayMode == DisplayMode.Article && 
          <h1>{title}</h1>
        }
        <p><time dateTime={article.data.post_date}>{article.data.post_date}</time></p>
      </header>
      <div>
      <SliceZone sliceZone={article.data.body} />
      </div>
    </article>
  )
}