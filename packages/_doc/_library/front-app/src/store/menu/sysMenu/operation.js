export default [
    {
        title: '权限管理',
        route: 'operation',
        path: '/operation',
        children: [
            {
                title: '用户信息',
                icon: 'icon-add-account',
                route: 'operation.user',
                path: '/operation/user',
            },
            {
                title: '设备管理',
                icon: 'icon-add-account',
                route: 'operation.device',
                path: '/operation/device',
            },

        ]
    }
]
