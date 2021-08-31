module.exports = {
    appList: [
        {
            runtime: true, // 本地是否启动
            name: 'core',
            entry: process.env.NODE_ENV === 'production' ? `//${location.host}/micro/core/` : '//localhost:20001',
            container: '#app-container',
            activeRule: '/core',
        },
        {
            runtime: true, // 本地是否启动
            name: 'ui',
            entry: process.env.NODE_ENV === 'production' ? `//${location.host}/micro/ui/` : '//localhost:20002',
            container: '#app-container',
            activeRule: '/ui',
        },
        {
            runtime: true, // 本地是否启动
            name: 'guide',
            entry: process.env.NODE_ENV === 'production' ? `//${location.host}/micro/guide/` : '//localhost:20003',
            container: '#app-container',
            activeRule: '/guide',
        },
        {
            runtime: true, // 本地是否启动
            name: 'product-admin',
            entry: process.env.NODE_ENV === 'production' ? `//${location.host}/micro/product-admin/` : '//localhost:20004',
            container: '#app-container',
            activeRule: '/product-admin',
        },
    ],
    proxy: {
        '/micro': {
            target: 'http://doc.ewenlai.com/',
        },
    },
};
