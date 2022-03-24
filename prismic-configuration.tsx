// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = process.env.apiEndpoint;
export const graphApiEndpoint = process.env.graphApiEndpoint;

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.accessToken;

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc: { type: string; uid: string }) => {
  return `/blog/${doc.uid}`;
};

// Additional helper function for Next/Link components
export const hrefResolver = (doc: { type: string; uid: string }) => {
  if (doc.type === "post") {
    return "/blog/[uid]";
  }
  return "/";
};
