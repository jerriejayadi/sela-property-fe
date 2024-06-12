import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:false,
  env: {
    HOST: process.env.LOCAL_HOST,
  },
  async rewrites() {
    return [
      {
        source: "/apis/:path*",
        destination: this.env.HOST + ":path*", // Proxy to Backend External
      },
      {
        source: "/api/:path*",
        destination: this.env.HOST + ":path*", // Proxy to Main path
      },
    ];
  },
};

export default withNextIntl(nextConfig);
