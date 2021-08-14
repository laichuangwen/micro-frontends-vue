const runAll = require('npm-run-all');

runAll(['start:*'], {
    parallel: true,
    stdin: process.stdin,
    stdout: process.stdout,
    stderr: process.stderr,
});
