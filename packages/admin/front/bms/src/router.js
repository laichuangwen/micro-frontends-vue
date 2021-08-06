export default [
    {
        name: 'bms',
        path: '/',
        component: () => import('./view/index.vue'),
        meta:{
            title: '业务系统',
        },
        children: [
            {
                name: 'bms.home',
                path: 'home',
                component: () => import('./view/home/index.vue'),
                meta:{
                    title: '首页',
                    permission: 'bms.home'
                },
            },
            {
                name: 'bms.guide',
                path: 'guide',
                component: () => import('./view/guide/index.vue'),
                meta:{
                    title: '引导页',
                },
            },
            {
                name: 'bms.router',
                path: 'router',
                component: () => import('./view/router/index.vue'),
                meta:{
                    title: '路由嵌套',
                },
                children: [
                    {
                        name: 'bms.router.list',
                        path: 'list',
                        component: () => import('./view/router/list/index.vue'),
                        meta:{
                            title: '列表',
                        },
                    },
                    {
                        name: 'bms.router.list2',
                        path: 'list2',
                        component: () => import('./view/router/list2/index.vue'),
                        meta:{
                            title: '列表2',
                        },
                        children: [
                            {
                                name: 'bms.router.list2.list',
                                path: 'list',
                                component: () => import('./view/router/list2/list/index.vue'),
                                meta:{
                                    title: '列表2-列表',
                                },
                            },
                        ]
                    }
                ]
            },
        ]
    },
]
