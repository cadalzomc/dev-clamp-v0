const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: false, // Change to true to enable bundle analysis
});

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  compress: isProd,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cadalzolc.s3.ap-southeast-1.amazonaws.com",
      },
    ],
  },
  webpack(config, { isServer }) {
    if (isProd && !isServer) {
      config.optimization.minimize = true;
    }

    config.resolve.fallback = {
      ...config.resolve.fallback,
      'kerberos': false,
      'snappy': false,
      'aws4': false,
      'gcp-metadata': false,
      '@aws-sdk/credential-providers': false,
      '@mongodb-js/zstd': false,
      'mongodb-client-encryption': false,
    };

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);