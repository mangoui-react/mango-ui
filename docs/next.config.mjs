import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone',
  reactStrictMode: true,
  transpilePackages: ['@mangoui/react'],
  swcMinify: true,
  // optimizePackageImports: ["@mangoui/react"],
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
