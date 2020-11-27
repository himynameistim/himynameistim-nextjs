import React from "react"
import categoryStyles from "../styles/category-heading.module.scss"

export default function Category({ name }) {
  return (
    <div className={["d-flex align-items-center", categoryStyles.banner].join(" ")}>
        <div className="container">
        { name }
        </div>
    </div>
  )
}