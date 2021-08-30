const launch = require('@support/front-launch');

launch.build({
    output: {
        library: 'product-admin-[name]',
        publicPath: '/micro/product-admin/',
    },
});
