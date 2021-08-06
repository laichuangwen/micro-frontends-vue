const merge = require('deepmerge')
const {
  getVueConfig,
} = require('../utils.js');
const baseConfig = {
  plugins: {
    "postcss-preset-env": {},
  }
};
module.exports = merge(baseConfig, getVueConfig('postcss.config.js'));
