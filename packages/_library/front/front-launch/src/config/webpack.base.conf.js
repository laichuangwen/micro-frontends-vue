
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const isProduction = process.env.NODE_ENV === 'production';
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');
const markdownLoader = require('./markdown.js')
const {
    resolve,
} = require('../utils');

const cssLoderCommon = [
    {
        loader: "postcss-loader",
        options: {
            postcssOptions: {
                config: path.resolve(__dirname, './postcss.config.js'),
            },
        },
    },
    'sass-loader',
    {
        loader: 'sass-resources-loader',
        options: {
            resources: [
                path.resolve(__dirname, '../../node_modules/@support/front-sass-variable/index.scss'),
            ]
        }
    }
]
module.exports = {
    mode: 'development',
    context: resolve('/'),
    entry: {
        main: "./src/main.js",
    },
    output: {
        publicPath: '/',
        filename: 'js/[name].[contenthash:8].js',
        // 把子应用打包成 umd 库格式
        library: `main`,
        libraryTarget: 'umd',
        clean: true, // 打包后清除旧的
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: path.resolve(__dirname, './babel.config.js'),
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                oneOf: [
                    {
                        resourceQuery: /module/,
                        use: [
                            !isProduction ? 'vue-style-loader' :
                                {
                                    loader: MiniCssExtractPlugin.loader,
                                    options: {
                                        esModule: false,
                                    },
                                },
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: {
                                        localIdentName: '[local]_[hash:base64:8]'
                                    },

                                }
                            },
                            ...cssLoderCommon // 公共部分
                        ]
                    },
                    {
                        use: [
                            !isProduction ? 'vue-style-loader' :
                                {
                                    loader: MiniCssExtractPlugin.loader,
                                    options: {
                                        esModule: false,
                                    },
                                },
                            'css-loader',
                            ...cssLoderCommon,// 公共部分
                        ]
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name].[contenthash:8][ext][query]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[contenthash:8][ext][query]',
                },
            },
            {
                test: /\.icon$/,
                use: {
                    loader: 'svg-sprite-loader',
                    options: {
                        runtimeGenerator: require.resolve('./icon/svg-custom-runtime-generator'),
                        symbolId: 'icon-[hash:5]',
                        symbolRegExp: /([^<>/\\\|:""\*\?]+)\.icon$/
                    }
                }
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'vue-loader'
                    },
                    markdownLoader
                ]
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '../../node_modules'),
            resolve('node_modules'),
            'node_modules',
        ],
    },
    resolveLoader: {
        modules: [
            path.resolve(__dirname, '../../node_modules'),
            resolve('node_modules'),
            'node_modules',
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        // 判断根目录是否有index.html 有的话就做模版
        new HtmlWebpackPlugin(resolve('index.html') ? { template: resolve('index.html') } : { template: path.resolve(__dirname, '../index.html') }),
        // 提取样式
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css'
        }),
    ],
    // 警告 webpack 的性能提示
    performance: {
        hints: 'warning',
        // 入口起点的最大体积
        maxEntrypointSize: 50000000,
        // 生成文件的最大体积
        maxAssetSize: 30000000,
        // 只给出 js 文件的性能提示
    }
};