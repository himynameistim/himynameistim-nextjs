import React from 'react'
import { CodeBlock } from '../../../Models/Post'

/**
 * Code slice component
 */
const CodeSlice = ({ slice }: {slice: CodeBlock}) => {
 
return (
   <>
     <pre>
     <code dangerouslySetInnerHTML={{__html: slice.code}}></code>
     </pre>
</>
)}

export default CodeSlice
