import React from 'react'
import Caption from './Caption'
import Image from "next/image"

/**
 * Default image component
 */
const DefaultImage = ({ slice }) => {
  const imageUrl = slice.primary.image.url
  const imageAlt = slice.primary.image.alt
  const caption = slice.primary.caption
  const imageHeight = slice.primary.image.dimensions.height;
  const imageWidth = slice.primary.image.dimensions.width;
  const lowResString = "&blur=200&px=16&auto=format"
  const lowResImage = imageUrl + lowResString;

  return (
    <div className="post-part single container">
      <div className={`block-img ${slice.slice_label}`}>
        <Image placeholder="blur" blurDataURL={lowResImage} src={imageUrl} alt={imageAlt} height={imageHeight} width={imageWidth}  />
        { caption && caption != "" &&
        <Caption caption={caption} />
        }
      </div>
    </div>
  )
}

export default DefaultImage
