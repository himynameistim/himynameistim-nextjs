import React from 'react'
import { TextSlice, QuoteSlice, CodeSlice, ImageSlice } from './slices'
import type { CodeBlock, ImageBlock, QuoteBlock, Slices, TextBlock } from '../../Models/Post'

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
          return <ImageSlice slice={slice as ImageBlock} key={`slice-${index}`} />
        case ('quote'):
        case ('PostBodyquote'):
          return <QuoteSlice slice={slice as QuoteBlock} key={`slice-${index}`} />
        case ('code_block'):
        case ('PostBodyCode_block'):
            return <CodeSlice slice={slice as CodeBlock} key={`slice-${index}`} />
        case ('text_block'):
        case ('PostBodyText_block'):
          return <TextSlice slice={slice as TextBlock} key={`slice-${index}`} />
        default:
          return null
      }
    }
  )}
  </div>
  )}
