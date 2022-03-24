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
        <Link href={`/${path}/page/${page + 1}`}>
          <a title="Older Posts">&lt; Older Posts</a>
        </Link>
      )}
      {page > 2 && (
        <Link href={`/${path}/page/${page - 1}`}>
          <a title="Newer Posts">Newer Posts &gt;</a>
        </Link>
      )}
      {page == 2 && (
        <Link href={`/${path}`}>
          <a title="Newer Posts">Newer Posts &gt;</a>
        </Link>
      )}
    </nav>
  );
}
