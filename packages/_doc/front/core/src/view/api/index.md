## 概述
浏览器请求处理，基于[axios@0.21.1](https://github.com/axios/axios),用法也和官方文档一致

## 注入Vue
```js
import createApp from '@support/front-create-app'
import Api from '@support/front-api'
const app = createApp()
app
    // 声明任务
    .task('请求处理', Api)
    // 注入所有任务
    .use(app.getAllTask())
    .start()
// 获取实例
Vue.$ctx.api
```

## 单独使用
```js
import Api from '@support/front-api'
// 获取实例
const api = new Api()
```

## 实例API

### request
- 类型 `function`
- 参数 
    - `{object} config`
- 用法
    ```js
    // 发送一个post请求
    api.request({
        method: 'post',
        url: '/user/12345',
        data: {
            firstName: 'Fred',
            lastName: 'Flintstone'
        }
    })
    ```
    request请求

### get
- 类型 `function`
- 参数 
    - `{string} url`
    - `{object} [config]`
- 用法
    ```js
    api.get('/user',{
      params:{
        id: 12
      }
    })
    ```
    get请求

### post
- 类型 `function`
- 参数 
    - `{string} url`
    - `{object} [data]`
    - `{object} [config]`
- 用法
    ```js
    api.post('/user/12345', { name: 'hello world' })
    ```
    post请求

### delete
- 类型 `function`
- 参数 
    - `{string} url`
    - `{object} [config]`
- 用法
    ```js
    api.delete('/user/12345')
    ```
    delete请求

### put
- 类型 `function`
- 参数 
    - `{string} url`
    - `{object} [data]`
    - `{object} [config]`
- 用法
    ```js
    api.put('/user/12345', { name: 'hello world' })
    ```
    put请求

### patch
- 类型 `function`
- 参数 
    - `{string} url`
    - `{object} [data]`
    - `{object} [config]`
- 用法
    ```js
    api.patch('/user/12345', { name: 'hello world' })
    ```
    patch请求

## 更多用法
- [axios@0.21.1](https://github.com/axios/axios)

