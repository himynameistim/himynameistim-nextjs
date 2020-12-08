import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../../prismic-configuration'
import { customLink } from '../../../utils/prismicHelpers'

/**
 * Text slice component
 */
const Text = ({ slice }: { slice: any}) => (
  <div className="post-part single container">
    <RichText
      render={slice.primary.body1}
      linkResolver={linkResolver}
      // Seems a bit odd to remove this
      //serializeHyperlink={customLink}
    />
  </div>
)

export default Text
