import React from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../../prismic-configuration";
import { TextBlock } from "../../../Models/Post";

/**
 * Text slice component
 */
const TextSlice = ({ slice }: { slice: TextBlock }) => (
  <div className="post-part single container" dangerouslySetInnerHTML={{__html: slice.text}}>
    {/*<RichText render={slice.primary.body1} linkResolver={linkResolver} />*/}
  </div>
);

export default TextSlice;
