module.exports = async ({ ctx }) => {
    const chalk = require('chalk');
    const not_work_regxp = /^(packages\/_docs)/;
    const { readFileSync } = require('fs');
    const commitMsg = readFileSync(process.env.HUSKY_GIT_PARAMS, 'utf-8');
    // 是否符合json格式
    try {
        JSON.parse(`{ "msg": "${commitMsg.replace(/\n$/gui, '')}" }`);
    } catch (e) {
        console.log(`${chalk.red('提交信息格式不正确，包含特殊字符，请填写支持JSON序列化的提交信息')}`);
        process.exit(1);
    }

    if ((/^(doc|ext)/gui).test(commitMsg)) { // 非业务提交
        const work_files = ctx.files.filter((item) => !not_work_regxp.test(item));
        console.log('work_files', work_files);
        if (work_files.length > 0) { // 是否包含非业务提交
            console.log(`${work_files.join('\n')}`);
            console.log(`${chalk.red('文档提交(_docs）请勿包含业务代码')}`);
            process.exit(1);
        }
    } else { // 业务提交
        const not_work_files = ctx.files.filter((item) => not_work_regxp.test(item));
        if (!(/^([T|B])([0-9]{1,5})(\1[0-9]{1,5})*( .*)?\n$/gui).test(commitMsg)) {
            console.log(`${chalk.red('提交信息格式不符')} 模版：'T任务号 Bbug号 描述'，示例：'T12345T12345 新增顶部菜单' 任务和bug不能混合提交`);
            process.exit(1);
        }
        if (not_work_files.length > 0) { // 是否包含非文档提交
            console.log(`${chalk.red('业务提交请勿包含文档提交(_docs),文档提交模版\'doc 描述\'')} \n${not_work_files.join('\n')}`);
            process.exit(1);
        }
    }
};
