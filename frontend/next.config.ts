import type { NextConfig } from "next";

// Use the STRAPI_URL from environment, fallback to localhost for local dev
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

let hostname = 'localhost';
let port = '1337';
let protocol = 'http';

try {
  const url = new URL(STRAPI_URL);
  hostname = url.hostname;
  port = url.port || (url.protocol === 'https:' ? '443' : '80');
  protocol = url.protocol.replace(':', '');
} catch (e) {
  console.warn('Invalid STRAPI_URL, falling back to localhost:1337');
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: protocol as 'http' | 'https',
        hostname,
        port,
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;