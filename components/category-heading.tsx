import React from "react";

export default function Category({ name }: { name: string }) {
  return (
    <div className="bg-heading-color min-h-27.5 text-white text-6.5 px-8 mb-element flex items-center">
      <div className="container">{name}</div>
    </div>
  );
}
