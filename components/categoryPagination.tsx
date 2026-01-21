import React from "react";


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
        <a href={`/${path}/page/${page + 1}`} title="Older Posts">
          &lt; Older Posts
        </a>
      )}
      {page > 2 && (
        <a href={`/${path}/page/${page - 1}`} title="Newer Posts">
          Newer Posts &gt;
        </a>
      )}
      {page == 2 && (
        <a href={`/${path}`} title="Newer Posts">
          Newer Posts &gt;
        </a>
      )}
    </nav>
  );
}
