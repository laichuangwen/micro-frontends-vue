const program = require('commander');
const getAllPkgs = require('./task/getAllPkgs');

program
    .name('yarn start')
    .usage('[port]')
    .description('启动本地服务，port(可选)代表服务端口');

program
    .arguments('[port]')
    .action(async () => {
        process.env.NODE_ENV = 'development';
        const manager = require('./task/manager');
        manager
            .task('解析所有包', getAllPkgs)
            .start();
    });

program.parse(process.argv);
