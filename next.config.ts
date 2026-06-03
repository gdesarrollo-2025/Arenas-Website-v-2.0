import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack:{
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      }
    }
  },
  images:{
    remotePatterns: [
      new URL("https://s3-us-west-2.amazonaws.com/pictures.domus.la/inmobiliaria_59/**")
    ]
  }
};

export default nextConfig;
