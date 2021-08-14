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
// 注册主应用
registerMicroApps([
    {
        name: 'core',
        entry: '//localhost:20001',
        container: '#app-container',
        activeRule: '/core',
    },
    {
        name: 'ui',
        entry: '//localhost:20002',
        container: '#app-container',
        activeRule: '/ui',
    },
    {
        name: 'guide',
        entry: '//localhost:20003',
        container: '#app-container',
        activeRule: '/guide',
    },
    {
        name: 'product-admin',
        entry: '//localhost:20004',
        container: '#app-container',
        activeRule: '/product-admin',
    },
]);
