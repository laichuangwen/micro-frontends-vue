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
        ],
    },
];
