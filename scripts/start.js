
const program = require('commander')
const getAllPkgs = require('./task/getAllPkgs')
const getStartPkgs = require('./task/getStartPkgs')
const runHook = require('./task/runHook')
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
            .task(`运行服务`, runHook('devServer'))
            .start()
    })

program.parse(process.argv)
