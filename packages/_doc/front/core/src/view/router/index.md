## 概述
`vue`路由处理

## 注入Vue
```js
import createApp from '@support/front-create-app'
import Router from '@support/front-router'
const app = createApp()
app
    // 声明任务
    .task('路由处理', Router)
    // 注入所有任务
    .use(app.getAllTask())
    .start()
// 获取实例
Vue.$ctx.router
```
> 注入的同时会修改 `VueOption.router、VueOption.template、VueOption.components`的值，这样`app.start()`会自动初始化路由根结点