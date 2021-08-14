module.exports = async ({ ctx }) => {
    const simpleGit = require('simple-git');
    const git = simpleGit();
    await git.add(ctx.files);
};
