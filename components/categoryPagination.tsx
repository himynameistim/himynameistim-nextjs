import React from "react";
import Link from "next/link";

export function CategoryPagination({
  page,
  totalPages,
  path,
}: {
  page: number;
  totalPages: number;
  path: string;
}) {
  return (
    <nav className="container mx-auto mb-element block">
      {page < totalPages && (
        <Link href={`/${path}/page/${page + 1}`} title="Older Posts" className="bg-site-color text-text-on-site-color py-2.5 px-3.75 inline-block">
          &lt; Older Posts
        </Link>
      )}
      {page > 2 && (
        <Link href={`/${path}/page/${page - 1}`} title="Newer Posts" className="bg-site-color text-text-on-site-color py-2.5 px-3.75 inline-block float-right">
          Newer Posts &gt;
        </Link>
      )}
      {page == 2 && (
        <Link href={`/${path}`} title="Newer Posts" className="bg-site-color text-text-on-site-color py-2.5 px-3.75 inline-block float-right">
          Newer Posts &gt;
        </Link>
      )}
    </nav>
  );
}
