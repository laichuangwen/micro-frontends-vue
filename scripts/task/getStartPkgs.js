
module.exports = port => async ({ ctx, log }) => {
    const inquirer = require('inquirer')
    // 可以启动的项目列表
    const choices = Object.values(ctx.allPkgs)
        .filter(item => /\/server$/ig.test(item.name))
        .map(item => ({
            name: item.description,
            value: item.name
        })) // 名字以/server结尾的
    // 提示选择项目
    const rs = await inquirer.prompt([
        {
            type: 'list',
            name: 'name',
            message: '选择你要启动的项目',
            pageSize: 9999,
            choices
        }
    ])
    let name = rs.name
    ctx.runPkg = ctx.allPkgs[name]
}
