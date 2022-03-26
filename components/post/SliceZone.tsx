import React from 'react'
import { Text, Quote, ImageWithCaption, Code } from './slices'
import { Slices, TextBlock } from '../../Models/Post'

/**
 * Post slice zone component
 */
export function SliceZone ({ slices }: { slices: Slices[]}) {
  return (
    <div>
     {
    slices.map((slice, index) => {
      switch (slice.sliceType) {
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
          return <Text slice={slice as TextBlock} key={`slice-${index}`} />
        default:
          return null
      }
    }
  )}
  </div>
  )}
