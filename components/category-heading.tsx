import React from "react";

export default function Category({ name }: { name: string }) {
  return (
    <div className="bg-heading-color min-h-[110px] text-white text-[26px] px-8 mb-element flex items-center">
      <div className="container">{name}</div>
    </div>
  );
}
