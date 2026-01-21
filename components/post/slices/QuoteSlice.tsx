import React from 'react'
import type { QuoteBlock } from '../../../Models/Post'

/**
 * Quote slice component
 */
const QuoteSlice = ({ slice }: {slice: QuoteBlock}) => (
  <div className="post-part single container">
    <blockquote className="block-quotation">
      {slice.quote}
    </blockquote>
  </div>
)

export default QuoteSlice
