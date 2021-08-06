
const program = require('commander')
const getAllPkgs = require('./task/getAllPkgs')
const getStartPkgs = require('./task/getStartPkgs')
// const getLatestVersion = require('./task/getLatestVersion')
// const installDep = require('./task/installDep')
// const runHook = require('./task/runHook')
program
    .name('yarn start')
    .usage('[port]')
    .description('启动本地服务，port(可选)代表服务端口')

program
    .arguments('[port]')
    .action(async port => {
        process.env.NODE_ENV = 'development'
        const manager = require('./task/manager')
        manager
            .task(`解析所有包`, getAllPkgs)
            .task(`获取启动包`, getStartPkgs(port))
            // .task(`解析最新版本`, getLatestVersion(`build_${process.env.VAR_INC_NPM || 'dev'}`, false))
            // .task(`安装依赖`, installDep)
            // .task(`执行钩子`, runHook('devServer'))
            .start()
    })

program.parse(process.argv)
