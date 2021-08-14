const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            // 提取css 样式后js不压缩需要插件压缩
            new TerserPlugin(),
            // 压缩css
            new CssMinimizerPlugin(),
        ],
    },
};
module.exports = merge(baseWebpackConfig, webpackConfig);
