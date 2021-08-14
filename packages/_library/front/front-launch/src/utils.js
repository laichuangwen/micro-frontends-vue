const path = require('path');
const fs = require('fs');

const pkg = require(`${process.cwd()}/package.json`);
module.exports = {
    resolve(fileName) {
        // 不传返回 rootPath
        if (!fileName) return process.cwd();
        // 传值 判断该文件是否存在，存在返回路径
        if (fs.existsSync(path.join(process.cwd(), fileName))) return path.join(process.cwd(), fileName);
        return '';
    },
    pkgName() {
        // 读取包的项目名
        if (pkg && pkg.name) {
            return pkg.name;
        }
        return '';
    },
    getPort() {
        if (pkg && pkg.runtime && pkg.runtime.port) {
            return pkg.runtime.port;
        }
        return 8888;
    },
    // 读取ip
    getIp() {
        const interfaces = require('os').networkInterfaces();
        for (const devName in interfaces) {
            for (const alias of interfaces[devName]) {
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    return alias.address;
                }
            }
        }
    },
    getVueConfig(fileName = 'vue.config.js') {
        // 读取项目下的vue.config.js 等文件
        if (fs.existsSync(path.join(process.cwd(), fileName))) {
            const config = require(path.join(process.cwd(), fileName));
            return config;
        }
        return {};
    },
};
