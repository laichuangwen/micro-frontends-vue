const launch = require('@support/front-launch');

launch.build({
    output: {
        library: 'rbac-[name]',
        publicPath: '/micro/rbac/',
    },
});
