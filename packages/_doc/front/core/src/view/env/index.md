## 概述
环境变量，变量为只读，不可修改

## 注入Vue
```js
import createApp from '@support/front-create-app'
import Env from '@support/front-env'
const app = createApp()
app
    // 声明任务
    .task('环境变量', Env, { version: '0.0.1-55080' })
    // 注入所有任务
    .use(app.getAllTask())
    .start()

Vue.$ctx.version // '0.0.1-55080'
```