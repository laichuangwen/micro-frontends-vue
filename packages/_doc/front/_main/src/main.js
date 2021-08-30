import { registerMicroApps } from 'qiankun';
import createApp from '@support/front-create-app';
import frontApp from '@docs/front-app';
import routerList from './router';

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
        name: 'core',
        entry: process.env.NODE_ENV === 'production' ? `//${location.host}/micro/core/` : '//localhost:20001',
        container: '#app-container',
        activeRule: '/core',
    },
    {
        name: 'ui',
        entry: process.env.NODE_ENV === 'production' ? `//${location.host}/micro/ui/` : '//localhost:20002',
        container: '#app-container',
        activeRule: '/ui',
    },
    {
        name: 'guide',
        entry: process.env.NODE_ENV === 'production' ? `//${location.host}/micro/guide/` : '//localhost:20003',
        container: '#app-container',
        activeRule: '/guide',
    },
    {
        name: 'product-admin',
        entry: process.env.NODE_ENV === 'production' ? `//${location.host}/micro/product-admin/` : '//localhost:20004',
        container: '#app-container',
        activeRule: '/product-admin',
    },
];
console.log('应用列表', appList);
// 注册主应用
registerMicroApps(appList);
