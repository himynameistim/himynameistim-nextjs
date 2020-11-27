import React from "react"
import categoryStyles from "../styles/category-heading.module.scss"

export default function Category({ name }) {
  return (
    <div className={["flex items-center", categoryStyles.banner].join(" ")}>
        <div className="container mx-auto">
        { name }
        </div>
    </div>
  )
}