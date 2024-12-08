/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm workspaces',
    description: 'Kasm workspaces',
    icon: 'Kasm workspaces',
    listUrl: 'https://martynvdijke.github.io/kasm-registry/',
    contactUrl: 'https://vandijke.xyz/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
