import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@melio-ui/react'],
  swcMinify: true,
};

export default withContentlayer(nextConfig);
