export default [
    {
        name: 'core',
        path: '/',
        redirect: 'introduce',
        component: () => import('./view/index.vue'),
        meta: {
            title: '核心库',
        },
        children: [
            {
                name: 'core.introduce',
                path: 'introduce',
                meta: {
                    title: '介绍',
                },
                component: () => import('./view/introduce/index.md'),
            },
            {
                name: 'core.env',
                path: 'env',
                meta: {
                    title: 'Env 环境变量',
                },
                component: () => import('./view/env/index.md'),
            },
            {
                name: 'core.create-app',
                path: 'create-app',
                meta: {
                    title: 'Create-app任务管理',
                },
                component: () => import('./view/create-app/index.md'),
            },
            {
                name: 'core.api',
                path: 'api',
                meta: {
                    title: 'Api 请求处理',
                },
                component: () => import('./view/api/index.md'),
            },
            {
                name: 'core.store',
                path: 'store',
                meta: {
                    title: 'Store 状态管理',
                },
                component: () => import('./view/store/index.md'),
            },
            {
                name: 'core.router',
                path: 'router',
                meta: {
                    title: 'Router 路由处理',
                },
                component: () => import('./view/router/index.md'),
            },
            {
                name: 'core.util',
                path: 'util',
                meta: {
                    title: 'Util 常用工具',
                },
                component: () => import('./view/util/index.md'),
            },
            {
                name: 'core.reset-css',
                path: 'reset-css',
                meta: {
                    title: 'Reset-css 样式重置',
                },
                component: () => import('./view/reset-css/index.md'),
            },
            {
                name: 'core.sass',
                path: 'sass',
                meta: {
                    title: 'Sass 样式扩充',
                },
                component: () => import('./view/sass/index.vue'),
                children: [
                    {
                        name: 'core.sass.variable',
                        path: 'variable',
                        meta: {
                            title: 'variable 变量',
                        },
                        component: () => import('./view/sass/variable/index.md'),
                    },
                    {
                        name: 'core.sass.mixin',
                        path: 'mixin',
                        meta: {
                            title: 'mixin 混合',
                        },
                        component: () => import('./view/sass/mixin/index.md'),
                    },
                ],
            },
        ],

    },
];
