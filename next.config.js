const path = require('path');
const withImages = require('next-images')

module.exports = withImages({
  exclude: path.resolve(__dirname, 'public/assets/svg'),
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config
  }
})
