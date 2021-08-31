const runAll = require('npm-run-all');
const { appList } = require('@docs/front-config');

const runApp = appList.filter((app) => app.runtime).map((list) => `start:${list.name}`);
runAll(['start:main', ...runApp], {
    parallel: true,
    stdin: process.stdin,
    stdout: process.stdout,
    stderr: process.stderr,
});
