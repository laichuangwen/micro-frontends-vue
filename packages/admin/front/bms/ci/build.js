const launch = require('@support/front-launch');

launch.build({
    output: {
        library: 'bms-[name]',
        publicPath: '/micro/bms/',
    },
});
