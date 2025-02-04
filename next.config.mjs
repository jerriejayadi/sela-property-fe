import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
  reactStrictMode: false,
  env: {
    HOST: process.env.HOST,
  },
  async rewrites() {
    return [
      {
        source: "/apis/:path*",
        destination: process.env.HOST + ":path*", // Proxy to Backend External
      },
      {
        source: "/api/:path*",
        destination: process.env.HOST + ":path*", // Proxy to Main path
      },
    ];
  },
};

export default withNextIntl(nextConfig);
