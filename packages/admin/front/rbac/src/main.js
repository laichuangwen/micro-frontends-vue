import createApp from '@support/front-create-app';
import frontApp from '@admin/front-app';
import routerList from './router.js';

if (window.__POWERED_BY_QIANKUN__) {
    // eslint-disable-next-line
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
const option = {
    env: {
        sys: 'rbac',
    },
    base: 'rbac',
    routes: routerList,
};

let instance = null;
async function render(props = {}) {
    const app = createApp();
    instance = await frontApp(app, { _mainApp: { ...props }, ...option })
        .use(app.getAllTask())
        .start();
}
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}
export async function bootstrap() {
    console.log('rbac微应用启动');
}
export async function mount(props) {
    render(props);
}
export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
}
