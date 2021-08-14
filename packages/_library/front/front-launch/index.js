const { merge } = require('webpack-merge');
const build = require('./src/build');
const devServer = require('./src/devServer');
const prodWebpackConfig = require('./src/config/webpack.prod');
const devWebpackConfig = require('./src/config/webpack.dev');
const {
    getVueConfig,
} = require('./src/utils');

module.exports = {
    // 启动本地服务开发
    devServer(option = {}) {
        return devServer(merge(devWebpackConfig, getVueConfig(), option));
    },
    // 启动编译打包
    build(option = {}) {
        return build(merge(prodWebpackConfig, getVueConfig(), option));
    },
};
