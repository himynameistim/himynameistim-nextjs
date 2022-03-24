import React from "react";
import categoryStyles from "../styles/category-heading.module.scss";

export default function Category({ name }: { name: string }) {
  return (
    <div className={categoryStyles.banner}>
      <div className="container">{name}</div>
    </div>
  );
}
