import '@support/front-reset-css'
// import ElementUI from 'element-ui';
export default async ({ Vue }) => {
    // 分包
    const { default: elementBase } = await import(/* webpackChunkName: 'element-base'*/'./element-base')
    const { default: elementForm } = await import(/* webpackChunkName: 'element-form'*/'./element-form')
    const { default: elementNotice } = await import(/* webpackChunkName: 'element-notice'*/'./element-notice')
    const { default: elementData } = await import(/* webpackChunkName: 'element-data'*/'./element-data')
    const { default: elementOther } = await import(/* webpackChunkName: 'element-other'*/'./element-other')
    const { default: com } = await import('./com')
    Vue.use(elementBase)
    Vue.use(elementForm)
    Vue.use(elementNotice)
    Vue.use(elementData)
    Vue.use(elementOther)

    Vue.prototype.$ELEMENT = { size: 'small', zIndex: 50000 };
    Vue.use(com)
}