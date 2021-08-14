module.exports = (filter = 'ACMRTUB') => async ({ ctx }) => {
    const simpleGit = require('simple-git');
    const git = simpleGit();
    const output = await git.diff([
        '--cached',
        `--diff-filter=${filter}`,
        '--name-only',
        '--no-renames',
    ]);
    const files = output.split('\n').filter((item) => item);
    // console.log(files);
    ctx.files = files;
};
