const launch = require('@support/front-launch');

launch.build({
    output: {
        library: 'core-[name]',
        publicPath: '/micro/core/',
    },
});
