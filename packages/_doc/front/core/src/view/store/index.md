## 概述
`vue`状态管理

## 注入Vue
```js
import createApp from '@support/front-create-app'
import Store from '@support/front-store'
const app = createApp()
app
    // 声明任务
    .task('状态管理', Store)
    // 注入所有任务
    .use(app.getAllTask())
    .start()
// 获取实例
Vue.$ctx.store
// 获取vuex
Vue.$ctx.vuex
```
注入的同时会修改 `VueOption.store`的值，这样`app.start()`会自动初始化状态管理