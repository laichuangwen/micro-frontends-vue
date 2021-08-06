

module.exports = ({ ctx, log }) => {
    const shell = require('shelljs');
    // const pkg = require('../package.json')
    const CONFIG_DOCKER = { url: 'registry.cn-hangzhou.aliyuncs.com', projectName: 'ali-mirror', username: '18377779061', password: 'chuang6505305' }
    const ImageName = `${CONFIG_DOCKER.url}/${CONFIG_DOCKER.projectName}/admin:0.0.1`
    // 打包docker
    const commands = [
        `docker login -u=${CONFIG_DOCKER.username} -p=${CONFIG_DOCKER.password} ${CONFIG_DOCKER.url}`,
        `docker build -t ${ImageName} .`,
        `docker push ${ImageName}`,
        `docker rmi ${ImageName}`
    ]
    for (const command of commands) {
        console.log(command)
        shell.exec(command)
    }
}