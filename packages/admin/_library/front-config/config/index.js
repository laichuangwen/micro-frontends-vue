module.exports = {
    appList: [
        {
            runtime: true, // 本地是否启动
            name: 'bms',
            entry: process.env.NODE_ENV === 'production' ? `//${location.host}/micro/bms/` : '//localhost:10001',
            container: '#app-container',
            activeRule: '/bms',
        },
        {
            runtime: true, // 本地是否启动
            name: 'rbac',
            entry: process.env.NODE_ENV === 'production' ? `//${location.host}/micro/rbac/` : '//localhost:10002',
            container: '#app-container',
            activeRule: '/rbac',
        },
        {
            runtime: true, // 本地是否启动
            name: 'operation',
            entry: process.env.NODE_ENV === 'production' ? `//${location.host}/micro/operation/` : '//localhost:10003',
            container: '#app-container',
            activeRule: '/operation',
        },
    ],
    proxy: {
        '/micro': {
            target: 'http://doc.ewenlai.com/',
            logLevel: 'silent',
        },
        '/bms-api': {
            target: 'http://161.189.204.238:8080',
            logLevel: 'silent',
        },
    },
};
