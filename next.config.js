const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');
const plugins = [withImages]

const nextConfiguration = {
    webpack(config) {
        return config
    }
}

module.exports = withPlugins([...plugins], nextConfiguration);
