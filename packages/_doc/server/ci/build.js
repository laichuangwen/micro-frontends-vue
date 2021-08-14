const runAll = require('npm-run-all');

runAll(['build:*'], {
    parallel: true,
    stdin: process.stdin,
    stdout: process.stdout,
    stderr: process.stderr,
});
