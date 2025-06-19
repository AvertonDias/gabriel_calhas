
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  allowedDevOrigins: [
    'https://9000-firebase-studio-1749341791621.cluster-kc2r6y3mtba5mswcmol45orivs.cloudworkstations.dev',
    'https://6000-firebase-studio-1749341791621.cluster-kc2r6y3mtba5mswcmol45orivs.cloudworkstations.dev'
  ],
};

export default nextConfig;
