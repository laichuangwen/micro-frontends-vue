export default [
    {
        path: '/login',
        component: () => import('./view/container/index.vue'),
    },
    {
        path: '*',
        component: () => import('./view/container/index.vue'),
    },
];
