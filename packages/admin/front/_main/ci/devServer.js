const launch = require('@support/front-launch');

launch.devServer({
    devServer: {
        open: true, // 主应用默认打开
        proxy: { // 代理
            '/bms-api': {
                target: 'http://192.168.10.16:8888',
            },
        },
    },
});
