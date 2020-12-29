import React from 'react'

/**
 * Code slice component
 */
const Code = ({ slice }: {slice: any}) => {
 
return (
   <>
     <pre>
     <code dangerouslySetInnerHTML={{__html: slice.primary.html}}></code>
     </pre>
</>
)}

export default Code
