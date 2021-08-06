module.exports = async ({
    ctx,
    log
}) => {
    const {
        resolve
    } = require('path')
    const {
        existsSync
    } = require('fs')
    const { emptyDirSync, rmdirSync, copySync, mkdirpSync } = require('fs-extra')
    log(`更新release目录`)
    for (const pkg of Object.values(ctx.allPkgs)) {
        if (pkg.runtime.build) {
            const dist_dir = resolve(pkg.realPath, './dist')
            if (existsSync(dist_dir)) {
                const slugPath = `./release/${pkg.name.replace('@', '')}`
                if (existsSync(slugPath)) {
                    await emptyDirSync(slugPath)
                }
                await mkdirpSync(slugPath)
                await copySync(dist_dir, slugPath)
            }
        }
    }

}
