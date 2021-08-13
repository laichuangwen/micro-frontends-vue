const webpack = require('webpack');
const ora = require('ora')
module.exports = (prodWebpackConfig) => {
  // 提示加载
  const spinner = ora('building for production... \n');
  spinner.start()
  webpack(prodWebpackConfig, (err, status) => {
    //加载动画结束
    spinner.stop();
    if (err) throw err;
    process.stdout.write(status.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n');
  });
};