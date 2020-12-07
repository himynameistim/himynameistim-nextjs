import React from "react"
import linkStyles from "../styles/section-heading.module.scss"

export default function SectionHeading({ heading }: { heading: String }) {
    return (
        <div className={[ linkStyles.sectionHeading, "mb-16" ].join(" ") }>
        <h2 className="text-center">{heading}</h2>
        </div>
    )
}