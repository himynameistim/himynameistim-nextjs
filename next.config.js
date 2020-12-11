const { redirect } = require("next/dist/next-server/server/api-utils");
const path = require("path");

module.exports = {
  target: "serverless",
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/category/:slug',
        destination: '/:slug',
        permanent: true,
      }
      ,
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug',
        destination: '/blog/:slug',
        permanent: true,
      }
    ]
  }
}