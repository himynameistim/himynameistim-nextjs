import React from "react"
import Link from "next/link"
import linkStyles from "../styles/section-heading.module.scss"

export default function SectionHeading({ heading, link }: { heading: String, link: string }) {
    return (
      <div className={ linkStyles.sectionHeading }>
        <h2><Link href={link}><a>{heading}</a></Link></h2>
      </div>
    )
}