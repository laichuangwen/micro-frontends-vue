const webpack = require('webpack');
const chalk = require('chalk')
const WebpackDevServer = require('webpack-dev-server');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ora = require('ora');
const {
    pkgName,
    getIp,
} = require('../utils');

module.exports = (devWebpackConfig) => {
    const { devServer } = devWebpackConfig
    const { port } = devServer
    const messagesIp = `http://${getIp()}:${port}`
    const messagesHost = `http://localhost:${port}`
    const spinner = ora()
    devWebpackConfig.plugins.push(new webpack.ProgressPlugin((percentage, message, ...args) => {
        // e.g. Output each progress message directly to the console:
        //console.info(percentage, message, ...args);
        // 进度条处理
        const pre = parseInt(percentage * 100)
        if (pre < 99) {
            if (!spinner.isSpinning) {
                spinner.start()
            }
            spinner.color = 'blue';
            spinner.text = chalk.blue(`${message}${args}(${pre}%)\n`);
        } else {
            if (spinner.isSpinning) {
                spinner.stop()
            }
        }
    }));
    // 错误提示插件
    devWebpackConfig.plugins.push(new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
            messages: [
                `App running at : ${chalk.green(pkgName())}`,
                `- Local:   ${chalk.cyan(messagesIp)}`,
                `- Network: ${chalk.cyan(messagesHost)}`,
            ]
        },
    }));

    const compiler = webpack(devWebpackConfig);
    const server = new WebpackDevServer(compiler, devServer);
    server.listen(port);
};