const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');

const nextConfiguration = {
    webpack(config) {
        return config
    }
}

module.exports = withPlugins([withImages], nextConfiguration);
