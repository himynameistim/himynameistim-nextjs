import React from "react"
import Link from "next/link"
import linkStyles from "../styles/featured-link-1.module.scss"

export default function FeaturedLink1({ category, title, date }) {
  return (
    <Link href="/sitecore">
      <div className={linkStyles.featuredLink1}>
        <div className={linkStyles.thumb}>
            <img src="https://preview.colorlib.com/theme/eden/img/magazine/1.jpg" />
        </div>
        <div className={linkStyles.short}>
            <div className="text-highlight mb-1">{ category }</div>
            <div className="text-2xl font-semibold mb-2">{ title }</div>
            <div className="text-xs">{ date }</div>
        </div>
        </div>
        </Link>
  )
}