const { default: chalk } = require('chalk');
const { ESLint } = require('eslint');

module.exports = async ({ ctx, log }) => {
    const eslint = new ESLint({ fix: true });
    // 只检验js和vue文件
    const files = ctx.files.filter((file) => /\.(js|vue)$/ig.test(file));
    // 2. Lint files. This doesn't modify target files.
    const results = await eslint.lintFiles(files);

    // 3. Modify the files with the fixed code.
    await ESLint.outputFixes(results);

    // 4. Format the results.
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);
    console.log(resultText);

    // 统计错误数量
    if (!results.length) { return; }
    const errorCount = results.map((list) => list.errorCount).reduce((prev, curr) => prev + curr);
    if (errorCount > 0) {
        log(chalk.red(`代码lint有${errorCount}个未处理，请根据eslint提示修复后，再提交！若要跳过检验后面加:--no-verify`));
        // 有错误不给提交
        process.exit(1);
    }
};
