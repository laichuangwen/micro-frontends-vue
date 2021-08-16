const runAll = require('npm-run-all');
const pack = require('@support/pack-build');
const path = require('path');

const frontPath = path.join(process.cwd(), '../front');
const distPath = path.resolve(process.cwd(), './dist');

const start = async () => {
    await runAll(['build:*'], {
        parallel: true,
        stdin: process.stdin,
        stdout: process.stdout,
        stderr: process.stderr,
    });
    await pack({
        frontPath,
        distPath,
    });
};
start();
