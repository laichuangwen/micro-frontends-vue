/**
 * 遍历`package`生成模块列表，json格式
 */

const { existsSync, readdirSync, statSync } = require('fs');

const ROOT_PATH = process.cwd();

const transformDeps = (json, key) => {
    if (!json[key]) return [];

    const { deps } = json[key];
    let arr = [...deps];

    deps.forEach((dep) => {
        arr = [
            ...arr,
            ...transformDeps(json, dep),
        ];
    });

    return arr;
};

const getSimplePkgs = (dir) => {
    const file_path = `${dir}/package.json`;
    const test_path = `${dir}/ci/test.js`;
    const build_path = `${dir}/ci/build.js`;
    const deploy_path = `${dir}/ci/deploy.js`;
    const devServer_path = `${dir}/ci/devServer.js`;

    let json = {};

    const package_json = existsSync(file_path) && require(file_path);

    if (package_json && package_json.name !== 'root') {
        json[package_json.name] = {
            description: package_json.description,
            name: package_json.name,
            main: package_json.main,
            runtime: {
                enable: existsSync(deploy_path), // 说明有ci 目录
                source: './src/index.js',
                dist: './dist/index.js',
                test: existsSync(test_path),
                build: existsSync(build_path),
                deploy: existsSync(deploy_path),
                devServer: existsSync(devServer_path),
                ...package_json.runtime,
            },
            realPath: dir,
            path: dir.replace(`${ROOT_PATH}/`, ''),
            deps: [
                ...Object.keys(package_json.dependencies || {}).filter((key) => key.startsWith('@support')),
                ...Object.keys(package_json.devDependencies || {}).filter((key) => key.startsWith('@support')),
            ],
        };
    } else {
        readdirSync(dir).forEach((item) => {
            if (item !== 'node_modules') {
                const name = `${dir}/${item}`;
                const stats = statSync(name);
                if (stats.isDirectory()) {
                    json = {
                        ...json,
                        ...getSimplePkgs(name),
                    };
                }
            }
        });
    }
    return json;
};

module.exports = async ({ ctx, log }) => {
    log('读取所有package.json');
    const json = getSimplePkgs(ROOT_PATH);
    log('校验依赖&生成dep字段');
    Object.keys(json).forEach((key) => {
        json[key].deps.forEach((dep) => {
            // 检查包名是否拼写错误
            if (!json[dep]) {
                const chalk = require('chalk');
                console.log(`  ${chalk.underline(`${json[key].realPath}/package.json`)}\n    ${chalk.red('找不到依赖 ')} ${dep} 不存在`);
                process.exit(1);
            }
        });
        json[key].deps = Array.from(new Set(transformDeps(json, key)));
    });
    ctx.allPkgs = json;
};
