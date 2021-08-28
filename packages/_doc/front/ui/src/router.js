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
            {
                name: 'ui.form-smart',
                path: 'form-smart',
                component: () => import('./view/form-smart/index.md'),
                meta: {
                    title: 'FormSmart 智能表单',
                },
            },
            {
                name: 'ui.search-wrap',
                path: 'search-wrap',
                component: () => import('./view/search-wrap/index.md'),
                meta: {
                    title: 'SearchWrap 列表搜索包裹',
                },
            },
            {
                name: 'ui.table-plus',
                path: 'table-plus',
                component: () => import('./view/table-plus/index.md'),
                meta: {
                    title: 'TablePlus 表格拓展',
                },
            },
            {
                name: 'ui.table-custom',
                path: 'table-custom',
                component: () => import('./view/table-custom/index.md'),
                meta: {
                    title: 'TableCustom 自定义表头',
                },
            },
            {
                name: 'ui.table-tool',
                path: 'table-tool',
                component: () => import('./view/table-tool/index.md'),
                meta: {
                    title: 'TableTool 表格工具',
                },
            },
            {
                name: 'ui.table-smart',
                path: 'table-smart',
                component: () => import('./view/table-smart/index.md'),
                meta: {
                    title: 'TableSmart 智能表格',
                },
            },
        ],
    },
];
