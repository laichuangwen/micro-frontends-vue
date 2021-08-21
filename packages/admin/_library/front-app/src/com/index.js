import '@support/front-reset-css';
// import ElementUI from 'element-ui';
export default async ({ Vue }) => {
    // 分包
    const { default: ui } = await import('./ui');
    const { default: com } = await import('./com');
    const { default: element } = await import('./element');
    Vue.use(ui);
    Vue.use(com);
    Vue.use(element);
};
