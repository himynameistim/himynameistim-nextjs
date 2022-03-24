import React from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../../prismic-configuration";

/**
 * Text slice component
 */
const Text = ({ slice }: { slice: any }) => (
  <div className="post-part single container">
    <RichText render={slice.primary.body1} linkResolver={linkResolver} />
  </div>
);

export default Text;
