import { registerMicroApps } from 'qiankun';
import createApp from '@support/front-create-app';
import frontApp from '@admin/front-app';
import routerList from './router.js';

const option = {
    env: {
        sys: '_main',
    },
    routes: routerList,
};
const app = createApp();
frontApp(app, option)
    .use(app.getAllTask())
    .start();

const appList = [
    {
        name: 'bms',
        entry: process.env.NODE_ENV === 'production' ? `//${location.host}/micro/bms/` : '//localhost:10001',
        container: '#app-container',
        activeRule: '/bms',
    },
    {
        name: 'rbac',
        entry: process.env.NODE_ENV === 'production' ? `//${location.host}/micro/rbac/` : '//localhost:10002',
        container: '#app-container',
        activeRule: '/rbac',
    },
    {
        name: 'operation',
        entry: process.env.NODE_ENV === 'production' ? `//${location.host}/micro/operation/` : '//localhost:10003',
        container: '#app-container',
        activeRule: '/operation',
    },
];
console.log('应用列表', appList);
// 注册主应用
registerMicroApps(appList);
