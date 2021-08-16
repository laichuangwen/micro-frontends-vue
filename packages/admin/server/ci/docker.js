const pack = require('@support/pack-docker');

pack({
    url: 'registry.cn-hangzhou.aliyuncs.com',
    base: 'ali-mirror',
    username: '18377779061', // 个人的阿里云东西，求不要乱搞，要不我就改密码了，谢谢
    password: 'chuang6505305',
    name: 'admin:0.0.1',
});
