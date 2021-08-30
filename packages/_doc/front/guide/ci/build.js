const launch = require('@support/front-launch');

launch.build({
    output: {
        library: 'guide-[name]',
        publicPath: '/micro/guide/',
    },
});
