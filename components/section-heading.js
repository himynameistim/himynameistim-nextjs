import React from "react"
import linkStyles from "../styles/section-heading.module.scss"

export default function SectionHeading({ heading }) {
    return (
        <div className={[ linkStyles.sectionHeading, "mb-16" ].join(" ") }>
        <h2 class="text-center">{heading}</h2>
        </div>
    )
}