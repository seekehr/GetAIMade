/** @type {import('next').NextConfig} */
const nextConfig = {
  // Let phones on the LAN load dev JS (otherwise client components never hydrate)
  allowedDevOrigins: ['192.168.100.162'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [{ source: '/favicon.ico', destination: '/favicon.svg' }]
  },
}

export default nextConfig
