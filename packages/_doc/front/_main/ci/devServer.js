const launch = require('@support/front-launch');

launch.devServer({
    devServer: {
        allowedHosts: 'all',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
        },
        open: true, // 主应用默认打开
    },
});
