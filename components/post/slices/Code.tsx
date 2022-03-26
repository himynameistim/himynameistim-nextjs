import React from 'react'
import { CodeBlock } from '../../../Models/Post'

/**
 * Code slice component
 */
const Code = ({ slice }: {slice: CodeBlock}) => {
 
return (
   <>
     <pre>
     <code dangerouslySetInnerHTML={{__html: slice.code}}></code>
     </pre>
</>
)}

export default Code
