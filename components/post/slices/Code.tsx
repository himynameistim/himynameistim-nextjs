import React, {useEffect} from 'react'
import Markdown from "react-markdown"
import { RichText } from 'prismic-reactjs'

/*import Prism from "prismjs"
import "prismjs/components/prism-markup"
import "prismjs/components/prism-css"
import "prismjs/components/prism-csharp"
import "prismjs/components/prism-git"
import "prismjs/components/prism-powershell"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"
import "prismjs/components/prism-regex"
import "prismjs/components/prism-sql"
import "prismjs/components/prism-typescript"*/

/**
 * Code slice component
 */
const Code = ({ slice }: {slice: any}) => {
  const code = RichText.asText(slice.primary.code)
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

  /*useEffect(() => {
    Prism.highlightAll();
}, []);*/


return (
   <>
   {/*<pre><code className="language-html">
     <Markdown source={code} />
     </code></pre>*/}
     <pre>
     <code dangerouslySetInnerHTML={{__html: slice.primary.html}}></code>
     </pre>
</>

)}

export default Code
