const launch = require('@support/front-launch');

launch.build({
    output: {
        library: 'operation-[name]',
        publicPath: '/micro/operation/',
    },
});
