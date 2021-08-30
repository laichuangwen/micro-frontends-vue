const launch = require('@support/front-launch');

launch.build({
    output: {
        library: 'ui-[name]',
        publicPath: '/micro/ui/',
    },
});
