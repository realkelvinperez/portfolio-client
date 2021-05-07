const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');

const nextConfiguration = {
    webpack(config, { isServer }) {
        config.module.rules.push({
            test: /\.(ogg|mp3|wav|mpe?g)$/i,
            exclude: config.exclude,
            use: [
                {
                    loader: require.resolve('url-loader'),
                    options: {
                        limit: config.inlineImageLimit,
                        publicPath: `/_next/static/sounds/`,
                        outputPath: `${isServer ? '../' : ''}static/sounds/`,
                        name: '[name]-[hash].[ext]',
                        esModule: config.esModule || false,
                    },
                },
            ],
        });
        return config
    }
}

module.exports = withPlugins([withImages], nextConfiguration);
