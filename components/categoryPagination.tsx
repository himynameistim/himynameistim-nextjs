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
    <nav className="container">
      {page < totalPages && (
        <Link href={`/${path}/page/${page + 1}`} title="Older Posts">
          &lt; Older Posts
        </Link>
      )}
      {page > 2 && (
        <Link href={`/${path}/page/${page - 1}`} title="Newer Posts">
          Newer Posts &gt;
        </Link>
      )}
      {page == 2 && (
        <Link href={`/${path}`} title="Newer Posts">
          Newer Posts &gt;
        </Link>
      )}
    </nav>
  );
}
