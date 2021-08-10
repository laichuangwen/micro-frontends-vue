const merge = require('babel-merge');
const {
  getVueConfig,
} = require('../utils');
const base = {
  presets: [
    require.resolve('@vue/babel-preset-jsx'),
    [require.resolve('@babel/preset-env'), {
      targets: { // 目标环境
        browsers: [ // 浏览器
          "last 2 versions",
          "ie >= 10"
        ],
        node: "current" // node
      },
      useBuiltIns: 'usage',
      corejs: '3.16.0',
    }],
  ],
  plugins: [
    require.resolve('@babel/plugin-transform-runtime'),
    // require.resolve('@babel/helper-module-imports'),
    // require.resolve('@babel/plugin-proposal-class-properties'),
    // require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),
    // require.resolve('@babel/plugin-proposal-optional-chaining'),
    // require.resolve('@babel/plugin-proposal-private-methods'),
    // require.resolve('@babel/plugin-syntax-dynamic-import'),
    // require.resolve('@babel/plugin-transform-named-capturing-groups-regex')
  ],
};
module.exports = merge(base, getVueConfig('babel.config.js'));