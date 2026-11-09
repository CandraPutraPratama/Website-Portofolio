/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/works",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
