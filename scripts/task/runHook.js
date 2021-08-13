
module.exports = hook => {
    return async ({ ctx, log }) => {
        const { name, path } = ctx.runPkg
        await new Promise((resolve) => {
            const { fork } = require('child_process')
            curr_child = fork(`ci/${hook}`, {
                stdio: 'inherit',
                cwd: path,
            })
            curr_child.on('message', data => {
                if (typeof data === 'object' && data.type === 'WEBPACK_BUILD_ERROR') {
                    errorPkgs.push(name)
                }
            })
            curr_child.on('close', () => { resolve(true) })
        })
    }
}

