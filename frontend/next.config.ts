import type { NextConfig } from "next";

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

let hostname = 'localhost';
let port = '1337';
let protocol = 'http';

try {
  const url = new URL(STRAPI_URL);
  hostname = url.hostname;
  port = url.port; // leave empty if default (80/443)
  protocol = url.protocol.replace(':', '') as 'http' | 'https';
} catch (e) {
  console.warn('Invalid STRAPI_URL, falling back to localhost:1337');
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol,
        hostname,
        port: port || '',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;