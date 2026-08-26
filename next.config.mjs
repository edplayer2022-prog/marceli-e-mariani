const repoName = '/marceli-e-mariani';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: repoName,
  assetPrefix: repoName,
  trailingSlash: true,
  images: {unoptimized: true},
};

export default nextConfig;

