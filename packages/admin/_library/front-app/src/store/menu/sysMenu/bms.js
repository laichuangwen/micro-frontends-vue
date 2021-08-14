export default [
    {
        title: '运营管理',
        route: 'bms',
        path: '/bms',
        children: [
            {
                title: '首页',
                icon: 'icon-add-account',
                route: 'bms.home',
                path: '/bms/home',
                permission: 'bms.home',
            },
            {
                title: '引导页',
                icon: 'icon-add-account',
                route: 'bms.guide',
                path: '/bms/guide',
            },
            {
                title: '路由嵌套',
                icon: 'icon-add-account',
                route: 'bms.router',
                path: '/bms/router',
                children: [
                    {
                        title: '列表1',
                        icon: 'icon-add-account',
                        route: 'bms.router.list',
                        path: '/bms/router/list',
                    },
                    {
                        title: '列表2',
                        icon: 'icon-add-account',
                        route: 'bms.router.list2.list',
                        path: '/bms/router/list2/list',
                        children: [
                            {
                                title: '列表3-1',
                                icon: 'icon-add-account',
                                route: 'bms.router.list2.list',
                                path: '/bms/router/list2/list',
                            },

                        ],
                    },
                ],
            },

        ],
    },
];
