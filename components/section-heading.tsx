import React from "react";
import Link from "next/link";

export default function SectionHeading({
  heading,
  link,
}: {
  heading: string;
  link?: string;
}) {
  return (
    <div className="relative">
      <h2 className="text-3.25xl sm:text-4xl mb-element text-center relative after:content-[''] after:absolute after:w-17.5 after:h-0.5 after:left-1/2 after:-translate-x-1/2 after:-bottom-2.5 after:bg-site-color">
        {link && <Link href={link}>{heading}</Link>}
        {link == null && heading}
      </h2>
    </div>
  );
}
