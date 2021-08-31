import { registerMicroApps } from 'qiankun';
import createApp from '@support/front-create-app';
import frontApp from '@admin/front-app';
import { appList } from '@admin/front-config';
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
console.log('应用列表', appList);
// 注册主应用
registerMicroApps(appList);
