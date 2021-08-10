import { registerMicroApps, initGlobalState } from 'qiankun';
import createApp from '@support/front-create-app'
import frontApp from '@docs/front-app';
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
        name: 'core',
        entry: '//localhost:20001',
        container: '#app-container',
        activeRule: '/core',
    }
]);
