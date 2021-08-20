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
                    title: 'SelectSmart 智能选择器',
                },
            },
            {
                name: 'ui.radio-smart',
                path: 'radio-smart',
                component: () => import('./view/radio-smart/index.md'),
                meta: {
                    title: 'RadioSmart 智能单选框组',
                },
            },
            {
                name: 'ui.checkbox-smart',
                path: 'checkbox-smart',
                component: () => import('./view/checkbox-smart/index.md'),
                meta: {
                    title: 'CheckboxSmart 智能多选框组',
                },
            },
        ],
    },
];
