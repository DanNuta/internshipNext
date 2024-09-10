/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i2-prod.mirror.co.uk",
      "img.freepik.com",
      "img3.wallspic.com",
      "upload.wikimedia.org",
      "media.geeksforgeeks.org",
      "sp-ao.shortpixel.ai",
      "123sonography.com",
      "discover.rbcroyalbank.com",
      "chronicle.brightspotcdn.com",
      "www.showallegiance.com",
      "i.ytimg.com",
      "borgenproject.org"
    ],
  },

  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
