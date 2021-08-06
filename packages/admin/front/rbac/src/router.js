export default [
    {
        name: 'rbac',
        path: '/',
        component: () => import('./view/index.vue'),
        meta:{
            title: '权限系统',
        },
        children: [
            {
                name: 'rbac.account',
                path: 'account',
                component: () => import('./view/account/index.vue'),
                meta:{
                    title: '账号',
                },
            },
            {
                name: 'rbac.menu',
                path: 'menu',
                component: () => import('./view/menu/index.vue'),
                meta:{
                    title: '菜单列表',

                },
            },
        ]
    },
]
