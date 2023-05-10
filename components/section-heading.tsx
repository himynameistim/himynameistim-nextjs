import React from "react";
import Link from "next/link";
import linkStyles from "@src/styles/section-heading.module.scss";

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
        {link && <Link href={link}>{heading}</Link>}
        {link == null && heading}
      </h2>
    </div>
  );
}
