/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@mango/ui'],
  // 아래 설정은 필요할 때 하나씩 설정하자.
  // output: 'standalone',
  // experimental: {
  //   esmExternals: false,
  //   // outputStandalone: true,
  // },
  // swcMinify: true,
  // webpack: (config) => {
  //   config.experiments = { ...config.experiments, topLevelAwait: true };
  //   return config;
  // },
};

module.exports = nextConfig;
