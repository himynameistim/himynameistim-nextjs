import Highlight, { defaultProps } from "prism-react-renderer";
import React from "react";
import { CodeBlock } from "../../../Models/Post";
import vsDark from "prism-react-renderer/themes/vsDark";

/**
 * Code slice component
 */
const CodeSlice = ({ slice }: { slice: CodeBlock }) => {
  return (
    <div className="[&_pre]:p-4 [&_pre]:text-base [&_pre]:leading-[1.5] [&_pre]:overflow-auto [&_pre]:font-mono">
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
                <div className="table-row">
                  <span className="table-cell text-right pr-4 select-none opacity-50">{i + 1}</span>
                  <span className="table-cell">
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
