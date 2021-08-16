const path = require('path');
const { readdirSync } = require('fs');
const {
    emptyDirSync, existsSync, copySync, mkdirpSync,
} = require('fs-extra');

module.exports = async (option = {}) => {
    const {
        frontPath = path.join(process.cwd(), '../front'), // 前端front目录
        distPath = path.resolve(process.cwd(), './dist'), // 生成的目标目录
    } = option;
    const dirs = readdirSync(frontPath);
    if (!dirs.length) {
        console.error('目录不存在应用，请检查frontPath');
        return;
    }
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
};
