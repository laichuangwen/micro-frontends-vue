const path = require('path');
const frontPath = path.join(process.cwd(), '../front')
const distPath = path.resolve(process.cwd(), './dist')
const pack = require('@support/pack-docker')

pack({
    frontPath,
    distPath,
    url: 'registry.cn-hangzhou.aliyuncs.com',
    base: 'ali-mirror',
    username: '18377779061',
    password: 'chuang6505305',
    name: 'docs:0.0.1'
})

