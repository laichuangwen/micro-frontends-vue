export default [
    {
        title: '权限管理',
        route: 'rbac',
        path: '/rbac',
        children: [
            {
                title: '账号管理',
                icon: 'icon-add-account',
                route: 'rbac.account',
                path: '/rbac/account',
            },
            {
                title: '菜单管理',
                icon: 'icon-add-account',
                route: 'rbac.menu',
                path: '/rbac/menu',
            },

        ]
    }
]
