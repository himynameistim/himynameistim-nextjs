import React from 'react'
import Markdown from "react-markdown"
import { RichText } from 'prismic-reactjs'

/**
 * Code slice component
 */
const Code = ({ slice }) => {
  const rawMarkdown = RichText.asText(slice.primary.code)
return (
   <>
   <pre><code class="language-html">
     <Markdown source={rawMarkdown} />
     </code></pre>
     </>
)}

export default Code
