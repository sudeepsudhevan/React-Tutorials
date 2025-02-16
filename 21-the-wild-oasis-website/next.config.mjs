/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.IMAGE_HOST,
                port: '',
                pathname: '/storage/v1/object/public/cabin-images/**',
            }
        ]
    }
};

export default nextConfig;
