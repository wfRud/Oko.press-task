module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    GITHUB_ACCESS_TOKEN: "",
  },
  images: {
    domains: ["avatars.githubusercontent.com", "unsplash.it"],
  },
};
