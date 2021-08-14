export default [
    {
        name: 'guide',
        path: '/guide',
        redirect: '/guide/introduce',
        component: () => import('./view/index.vue'),
        meta: {
            title: '指南',
        },
        children: [
            {
                name: 'guide.introduce',
                path: 'introduce',
                component: () => import('./view/introduce/index.md'),
                meta: {
                    title: '介绍',
                },
            },
            {
                name: 'guide.develop',
                path: 'develop',
                component: () => import('./view/develop/index.vue'),
                meta: {
                    title: '开发',
                },
                children: [
                    {
                        name: 'guide.develop.environment',
                        path: 'environment',
                        component: () => import('./view/develop/environment/index.md'),
                        meta: {
                            title: '环境准备',
                        },
                    },
                    {
                        name: 'guide.develop.style',
                        path: 'style',
                        component: () => import('./view/develop/style/index.md'),
                        meta: {
                            title: '风格指南',
                        },
                    },
                ],
            },
            {
                name: 'guide.feedback',
                path: 'feedback',
                component: () => import('./view/feedback/index.md'),
                meta: {
                    title: '反馈',
                },
            },
        ],
    },
];
