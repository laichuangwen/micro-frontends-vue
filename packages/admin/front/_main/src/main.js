import { registerMicroApps, initGlobalState } from 'qiankun';
import createApp from '@support/front-create-app'
import frontApp from '@admin/front-app';
import routerList from './router.js';
const option = {
    env: {
        sys: '_main',
    },
    routes: routerList
}
const app = createApp()
frontApp(app, option)
    .use(app.getAllTask())
    .start()
// 注册主应用
registerMicroApps([
    {
        name: 'bms',
        entry: '//localhost:10001',
        container: '#app-container',
        activeRule: '/bms',
    },
    {
        name: 'rbac',
        entry: '//localhost:10002',
        container: '#app-container',
        activeRule: '/rbac',
    },
    {
        name: 'operation',
        entry: '//localhost:10003',
        container: '#app-container',
        activeRule: '/operation',
    },
]);
