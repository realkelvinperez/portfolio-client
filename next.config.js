const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['three'])

const nextConfiguration = {
    webpack(config) {
        return config
    }
}

module.exports = withPlugins([withImages, withTM], nextConfiguration);
