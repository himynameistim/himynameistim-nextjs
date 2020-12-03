// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = 'https://himynameistim.cdn.prismic.io/api/v2'
export const graphApiEndpoint = 'https://himynameistim.cdn.prismic.io/graphql'

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = 'MC5YOGk0elJJQUFDWUFub1FR.77-977-9d0oEIe-_vREOAe-_vTnvv70h77-977-977-9EU8W77-9Wu-_ve-_ve-_ve-_vRbvv70a77-9ZwQ'

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
