/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i2-prod.mirror.co.uk", "img.freepik.com", "img3.wallspic.com"],
  },

  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
