/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.us.es'
      }
    ]
  }
}

export default nextConfig
