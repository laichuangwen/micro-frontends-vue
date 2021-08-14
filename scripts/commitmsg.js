const manager = require('./task/manager');
const getGitWorkspaceFiles = require('./task/getGitWorkspaceFiles');
const checkGitUser = require('./task/checkGitUser');
const checkCommitMsg = require('./task/checkCommitMsg');

console.log('ddddddd');
manager
    .task('读取工作区文件', getGitWorkspaceFiles('ACDMRTUB'))
    .task('检查邮箱、姓名格式', checkGitUser)
    .task('检查提交信息格式', checkCommitMsg)
    .start();
