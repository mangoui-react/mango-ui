import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone',
  reactStrictMode: true,
  transpilePackages: ['@melio-ui/react'],
  swcMinify: true,
  // optimizePackageImports: ["@melio-ui/react"],
  // externalDir: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/overview/introduction',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default withContentlayer(nextConfig);
