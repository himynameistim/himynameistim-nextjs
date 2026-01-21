import React from "react";

import linkStyles from "../styles/section-heading.module.scss";

export default function SectionHeading({
  heading,
  link,
}: {
  heading: string;
  link?: string;
}) {
  return (
    <div className={linkStyles.sectionHeading}>
      <h2>
        {link && <a href={link}>{heading}</a>}
        {link == null && heading}
      </h2>
    </div>
  );
}
