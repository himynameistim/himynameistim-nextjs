import React from "react"
import categoryStyles from "../styles/category-heading.module.css"
import Container from 'react-bootstrap/Container';

export default function Category({ name }) {
  return (
    <div className={["d-flex align-items-center", categoryStyles.banner].join(" ")}>
        <Container>
        { name }
        </Container>
    </div>
  )
}