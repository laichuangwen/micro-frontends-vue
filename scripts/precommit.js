const manager = require('./task/manager');
const getGitWorkspaceFiles = require('./task/getGitWorkspaceFiles');
const lint = require('./lint');
// const addToGitWorkspace = require('./task/addToGitWorkspace');

manager
    .task('读取工作区文件', getGitWorkspaceFiles())
    .task('代码检查', lint)
    // .task('更新到工作区', addToGitWorkspace)
    .start();
