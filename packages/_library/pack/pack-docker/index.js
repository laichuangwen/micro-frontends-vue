const shell = require('shelljs');

module.exports = async (option = {}) => {
    const {
        url, // 镜像仓库链接
        base, // 命名空间
        username, // 账号
        password, // 密码
        name, // 镜像名
    } = option;

    if (!url) return console.error('镜像url 不能为空！');
    if (!base) return console.error('镜像base 不能为空！');
    if (!username) return console.error('镜像username 不能为空！');
    if (!password) return console.error('镜像password 不能为空！');
    if (!name) return console.error('镜像name 不能为空！');

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
