const launch = require('@support/front-launch');
const { proxy } = require('@docs/front-config');

launch.devServer({
    devServer: {
        proxy,
        open: true, // 主应用默认打开
    },
});
