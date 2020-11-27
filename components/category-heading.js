import React from "react"
import categoryStyles from "../styles/category-heading.module.css"

export default function Category({ name }) {
  return (
    <div className={categoryStyles.banner}>
      { name }
    </div>
  )
}