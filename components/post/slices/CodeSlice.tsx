import Highlight, { defaultProps } from "prism-react-renderer";
import React from "react";
import { CodeBlock } from "../../../Models/Post";
import vsDark from "prism-react-renderer/themes/vsDark";
import codeStyles from "../../../styles/code.module.scss";

/**
 * Code slice component
 */
const CodeSlice = ({ slice }: { slice: CodeBlock }) => {
  return (
    <div className={codeStyles.codeStyles}>
      <Highlight
        {...defaultProps}
        code={slice.html}
        language={slice.language}
        theme={vsDark}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <div className={codeStyles.Line}>
                  <span className={codeStyles.LineNo}>{i + 1}</span>
                  <span className={codeStyles.LineContent}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeSlice;
