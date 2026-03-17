import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: `${process.env.NEXT_PUBLIC_REMOTE_REMOTE1_URL}/blog`,
      },
      {
        source: "/blog/:path*",
        destination: `${process.env.NEXT_PUBLIC_REMOTE_REMOTE1_URL}/blog/:path*`,
      },
      // 다른 remote 앱 경로 추가...
    ];
  },
};

export default nextConfig;
