// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = 'https://HiMyNameIsTim.cdn.prismic.io/api/v2'

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = 'MC5YOGZmUkJFQUFDY0FlNXU0.77-977-9KO-_ve-_vXs_b--_vUjvv73vv71I77-9Ye-_vTko77-977-977-9PigDE--_vWvvv73vv73vv73vv70i'

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'post') {
    return `/blog/${doc.uid}`
  }
  return '/'
}

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc.type === 'post') {
    return '/blog/[uid]'
  }
  return '/'
}
