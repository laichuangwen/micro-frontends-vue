module.exports = (hook) => async ({ ctx }) => {
    const { path } = ctx.runPkg;
    await new Promise((resolve) => {
        const { fork } = require('child_process');
        const curr_child = fork(`ci/${hook}`, {
            stdio: 'inherit',
            cwd: path,
        });
        curr_child.on('close', () => { resolve(true); });
    });
};
