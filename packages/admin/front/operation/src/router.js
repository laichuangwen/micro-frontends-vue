export default [
    {
        path: '/user',
        component: () => import('./view/user/index.vue'),
    },
    {
        path: '/device',
        component: () => import('./view/device/index.vue'),
    }
   
]
