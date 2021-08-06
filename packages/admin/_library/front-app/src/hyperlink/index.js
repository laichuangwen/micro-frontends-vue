
import { resolve, com, open } from './hyperlink'

export let _Vue

export default app => {
    const hyperlink = {
        resolve,
        open
    }

    if (typeof app === 'function') { // 旧版Vue注入
        _Vue = app
        app.component('hyper-link', com)
        app.$hyperlink = app.prototype.$hyperlink = hyperlink
        app.$ctx.hyperlink = hyperlink
    } else { // 新版注入
        _Vue = app.Vue
        app.Vue.component('hyperLink', com)
        app.Vue.$ctx.hyperlink = hyperlink
    }
}
