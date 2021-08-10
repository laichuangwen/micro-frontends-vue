
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
                    title: '介绍'
                },
                component: () => import('./view/introduce/index.md'),
            },
            {
                name: 'core.create-app',
                path: 'create-app',
                meta: {
                    title: 'Create-app任务管理',
                },
                component: () => import('./view/create-app/index.md'),
            },
        ]
    }
]
