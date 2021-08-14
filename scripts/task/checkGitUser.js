module.exports = async () => {
    const chalk = require('chalk');
    const simpleGit = require('simple-git');
    const git = simpleGit();
    const email = await git.raw([
        'config',
        '--get',
        'user.email',
    ]);
    // const name = await git.raw([
    //     'config',
    //     '--get',
    //     'user.name'
    // ])
    const errorMsg = [];
    if (!(/@(|qq).com$/gui).test(email.replace('\n', ''))) {
        errorMsg.push(`${chalk.red(`邮箱[${email}]格式不符`)} 请在项目根目录下重新设置'git config --local user.email [邮箱名]'`);
    }
    // if (!(/^[\u4e00-\u9fa5]+$/gui).test(name)) {
    //     errorMsg.push(`${chalk.red(`姓名[${name}]格式不符`)} 必须为中文，请在项目根目录下重新设置'git config --local user.name [用户名]'`)
    // }

    if (errorMsg.length > 0) {
        errorMsg.forEach((msg) => console.log(msg));
        process.exit(1);
    }
};
