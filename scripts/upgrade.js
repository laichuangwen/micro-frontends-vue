const cp = require('child_process')
const fs = require('fs')
const root = process.cwd()
const exec = (command, option) => cp.spawnSync(command, {
    shell: true,
    stdio: 'inherit',
    ...option
})

const checkYarnVersion = () => {
    const version = exec('yarn -v', {
        stdio: 'pipe'
    }).stdout.toString()
    const [
        major,
        minor,
        patch
    ] = version.replace(/\s*/g, '').split('.')
    if (Number(major) !== 1 || Number(minor) < 22 || Number(patch) < 4) return `${major}.${minor}.${patch}`
    return false
}

const checkNodeVersion = () => {
    const [
        major,
        minor
    ] = process.version.split('.')
    if (major !== 'v12' || Number(minor) < 14) return false
    return true
}

const validateDep = deps => {
    const pkg = require(`${root}/package.json`)
    for (const dep of deps) {
        const depPkg = require(`${root}/node_modules/${dep}/package.json`)
        if (pkg.dependencies[dep] !== depPkg.version) {
            return false
        }
    }

    return true
}
// 检查node版本是否正确
if (!checkNodeVersion()) {
    const tips = [`Node版本过低，当前版本${process.version}，仅支持版本 >=12.14.0, <13`]
    if (process.platform === 'win32') {
        tips.push(`windows用户推荐卸载后重装，下载地址 https://npm.taobao.org/mirrors/node/v12.14.0/`)
    } else {
        tips.push(`mac用户推荐使用n升级切换 https://github.com/tj/n`)
    }
    console.log('\x1B[31m%s\x1B[0m', tips.join('，'))
    process.exit(1)
}
// 检查yarn版本是否正确
if (checkYarnVersion()) {
    const tips = [
        `yarn版本过低，当前版本v${yarnVersion}，仅支持版本 >=1.22.4`,
        `升级教程 https://yarn.bootcss.com/docs/install`
    ]
    console.log('\x1B[31m%s\x1B[0m', tips.join('，'))
    process.exit(1)
}
// 检查是否安装依赖
if (!fs.existsSync('./node_modules')) {
    exec('yarn')
}
// // 检查依赖版本会否正确
if (!validateDep(['husky'])) {
    exec('yarn')
}
