const path = require('path');
const shell = require('shelljs');
const { readdirSync } = require('fs');
const {
    emptyDirSync, existsSync, copySync, mkdirpSync,
} = require('fs-extra');

module.exports = async (option = {}) => {
    const {
        frontPath = path.join(process.cwd(), '../front'),
        distPath = path.resolve(process.cwd(), './dist'),
        url, // 镜像仓库链接
        base, // 命名空间
        username, // 账号
        password, // 密码
        name, // 镜像名
    } = option;
    const dirs = readdirSync(frontPath);
    if (!dirs.length) {
        console.error('目录不存在应用，请检查frontPath');
        return;
    }
    if (!url) return console.error('镜像url 不能为空！');
    if (!base) return console.error('镜像base 不能为空！');
    if (!username) return console.error('镜像username 不能为空！');
    if (!password) return console.error('镜像password 不能为空！');
    if (!name) return console.error('镜像name 不能为空！');
    for (const dir of dirs) {
        const dist_dir = path.resolve(`${frontPath}/${dir}`, './dist');
        const slugPath = `${distPath}/${dir}`;
        if (existsSync(slugPath)) {
            // 存在就清空
            await emptyDirSync(slugPath);
        }
        await mkdirpSync(slugPath);
        await copySync(dist_dir, slugPath);
    }
    const ImageName = `${url}/${base}/${name}`;
    // 打包docker
    const commands = [
        `docker login -u=${username} -p=${password} ${url}`,
        `docker build -t ${ImageName} .`,
        `docker push ${ImageName}`,
        `docker rmi ${ImageName}`,
    ];
    for (const command of commands) {
        console.log(command);
        shell.exec(command);
    }
};
