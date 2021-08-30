export default [
    {
        name: 'product-admin',
        path: '/',
        redirect: 'introduce',
        component: () => import('./view/index.vue'),
        meta: {
            title: '项目',
        },
        children: [
            {
                name: 'product-admin.introduce',
                path: 'introduce',
                component: () => import('./view/introduce/index.md'),
                meta: {
                    title: '介绍',
                },

            },
            {
                name: 'product-admin.store',
                path: 'store',
                component: () => import('./view/store/index.md'),
                meta: {
                    title: '状态树',
                },
            },
            {
                name: 'product-admin.ctx',
                path: 'ctx',
                component: () => import('./view/ctx/index.md'),
                meta: {
                    title: 'Vue.$ctx',
                },
            },
        ],
    },
];
