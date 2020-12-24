import React from 'react'
import Markdown from "react-markdown"
import { RichText } from 'prismic-reactjs'

/**
 * Code slice component
 */
const Code = ({ slice }: {slice: any}) => {
  const rawMarkdown = RichText.asText(slice.primary.code)
  var language: string;
  switch (slice.primary.language) {
    case "HTML / XHTML / XML":
      language = "markup"
      break;
    case "CSS / SCSS":
      language = "css"
      break;
    case "C#":
      language = "csharp";
      break;
    case "Git":
      language = "git";
      break;
    case "JavaScript":
      language = "javascript";
      break;
    case "PowerShell":
      language = "powershell";
      break;
    case "React JSX":
      language = "jsx";
      break;
    case "React TSX":
      language = "tsx";
      break;
    case "Regex":
      language = "regex";
      break;
    case "SQL":
        language = "sql";
        break;
    case "TypeScript ":
      language = "typescript";
      break;
    default:
      language = "";
      break;
  }

return (
   <>
   <pre><code className="language-csharp">
     <Markdown source={rawMarkdown} />
     </code></pre>
     </>
)}

export default Code
