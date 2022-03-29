import React from 'react'
import Image from "next/image"
import { ImageBlock } from '../../../Models/Post'

/**
 * Default image component
 */
const ImageSlice = ({ slice }: { slice: ImageBlock}) => {
  const imageUrl = slice.image.url
  const imageAlt = slice.image.alt
  const imageHeight = slice.image.dimensions.height;
  const imageWidth = slice.image.dimensions.width;
  const lowResString = "&blur=200&px=16&auto=format"
  const lowResImage = imageUrl + lowResString;

  return (
    <div className="post-part single container">
      <div className="block-img">
        <Image placeholder="blur" blurDataURL={lowResImage} src={imageUrl} alt={imageAlt} height={imageHeight} width={imageWidth}  />
      </div>
    </div>
  )
}

export default ImageSlice
