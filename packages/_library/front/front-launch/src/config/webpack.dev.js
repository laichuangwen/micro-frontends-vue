const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const {
    getPort,
} = require('../utils');

const port = getPort();
const webpackConfig = {
    mode: 'development',
    devtool: 'source-map',
    devServer: { // 开发服务器
        port,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        client: {
            logging: 'warn',
            overlay: true,
            progress: true,
        },
    },

    infrastructureLogging: {
        level: 'warn',
        colors: true,
    },
    stats: false,
};

module.exports = merge(baseWebpackConfig, webpackConfig);
