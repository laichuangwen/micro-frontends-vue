const launch = require('@support/front-launch');
const { proxy } = require('@admin/front-config');

launch.devServer({
    devServer: {
        open: true, // 主应用默认打开
        proxy,
    },
});
