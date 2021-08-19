export default [
    {
        name: 'ui',
        path: '/ui',
        redirect: '/ui/introduce',
        component: () => import('./view/index.vue'),
        meta: {
            title: '通用UI',
        },
        children: [
            {
                name: 'ui.introduce',
                path: 'introduce',
                component: () => import('./view/introduce/index.md'),
                meta: {
                    title: '介绍',
                },

            },
            {
                name: 'ui.icon',
                path: 'icon',
                component: () => import('./view/icon/index.md'),
                meta: {
                    title: '图标',
                },
            },
            {
                name: 'ui.select-smart',
                path: 'select-smart',
                component: () => import('./view/select-smart/index.md'),
                meta: {
                    title: 'Select 智能选择器',
                },
            },
        ],
    },
];
