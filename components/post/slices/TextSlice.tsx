import React from "react";
import type { TextBlock } from "../../../Models/Post";

/**
 * Text slice component
 */
const TextSlice = ({ slice }: { slice: TextBlock }) => (
  <div
    className="post-part single container"
    dangerouslySetInnerHTML={{ __html: slice.text }}
  ></div>
);

export default TextSlice;
