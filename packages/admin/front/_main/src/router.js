export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import('./view/login/index.vue'),
    },
    {
        path: '/center',
        component: () => import('./view/center/index.vue'),
    },
    {
        path: '*',
        component: () => import('./view/container/index.vue'),
    },
   
]
