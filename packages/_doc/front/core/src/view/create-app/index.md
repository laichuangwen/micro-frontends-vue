
## 概述
基于[vue](https://cn.vuejs.org)的前端任务调度，支持异步任务、依赖管理

## 示例
```js
import createApp from '@support/front-create-app'
const app = new createApp()
app
    .use('第一个任务',()=> { console.log('hello world') })
    .start()
```

## 创建实例
```js
import createApp from '@support/front-create-app'
const app = new createApp()
app.Vue // vue function
app.Vue.$ctx // {}
app.VueOption // {}
```
创建实例，并在实例上挂载 `Vue` `Vue.$ctx` `VueOption`

## 实例API

### task
- 类型 `function`
- 参数 
    - `{string} name`
    - `{array} [deps]`
    - `{function} handle`
    - `{any} [config]`
- 返回值 `当前实例`
- 用法
    > `handle`支持异步任务，`deps`为依赖任务，需等待先执行
    ```js
    const task1 = (app , num) => { 
        console.log(`task1:${num}`) 
    }
    const task2 = async (app , num) => { 
        await app.sleep(1000)
        console.log(`task2:${num}`)
    }
    const task3 = (app , num) => { 
        console.log(`task3:${num}`) 
    }
    app.task('first', task1, 100)
    app.task('second', task2, 200)
    app.task('third', ['second'], task3, 300)
    ```
    创建任务，此时任务并不会被执行

### use
- 类型 `function`
- 参数 
    - `{string|array|function} task`
    - `{any} [config]`
- 返回值 `当前实例`
- 用法
    > `app.use`为一个执行单元，执行单元内的任务是并联执行，多个执行单元是按照注入顺序串联执行
    ```js
    const task1 = (app , num) => { 
        setTimeout(()=>{
            console.log(`task1:${num}`) 
        }, 5000)
    }
    const task2 = async (app , num) => { 
        setTimeout(()=>{
            console.log(`task2:${num}`)
        }, 1000)
    }
    const task3 = (app , num) => {
        await app.sleep(2000) 
        console.log(`task3:${num}`) 
    }
    const task4 = (app , num) => { 
        console.log(`task4:${num}`) 
    }
    app.task('first', task1, 100)
    app.task('second', task2, 200)
    app.task('third', task3, 300)
    app.task('four', ['third'], task4, 300)
    app.use(['first'])
    app.use(['second','third','four'])
    app.start()
    // 输出结果
    // task2:200
    // task3:300
    // task4:400
    // task1:100
    ```
    注入任务到执行队列

### start
- 类型 `function`
- 参数 
    - `{string} el` 默认'#app'
- 用法
    ```js
    app.start()
    ```
    按顺序执行任务队列，结束后创建`Vue(app.VueOption)`实例，并挂载到`el`上

### getAllTask
- 类型 `function`
- 返回值 创建的所有任务
- 用法
    ```js
    app.getAllTask()
    ```
    获取`app.task`创建过的所有任务

### sleep
- 类型 `function`
- 参数 
    - `{number} timeout` 默认0
- 返回值 Promise
- 用法
    ```js
    const task = async (app)=>{
        await app.sleep(1000)
        console.log('1s后输出')
    }
    ```
    等待`timeout`时间，配合`async/await`使用
