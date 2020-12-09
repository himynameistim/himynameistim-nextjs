import React from 'react'
import { Text, Quote, ImageWithCaption, Code } from './slices'

/**
 * Post slice zone component
 */
const SliceZone = ({ sliceZone }) => (
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      /* Add code block slice */
      case ('full_width_image'):
      case ('PostBodyFull_width_image'):
        return <ImageWithCaption slice={slice} key={`slice-${index}`} />
      case ('quote'):
      case ('PostBodyquote'):
        return <Quote slice={slice} key={`slice-${index}`} />
      case ('code_block'):
      case ('PostBodyCode_block'):
          return <Code slice={slice} key={`slice-${index}`} />
      case ('text_block'):
      case ('PostBodyText_block'):
        return <Text slice={slice} key={`slice-${index}`} />
      default:
        return null
    }
  })
)

export default SliceZone
