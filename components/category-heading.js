import React from "react"
import categoryStyles from "../styles/category-heading.module.scss"

export default function Category({ name }) {
  return (
    <div className={["flex items-center px-8 mb-10", categoryStyles.banner].join(" ")}>
        <div className="container mx-auto">
        { name }
        </div>
    </div>
  )
}