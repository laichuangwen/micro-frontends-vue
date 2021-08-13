## 概述
前端工具库，集成了很多常用的方法

## 注入Vue
```js
import createApp from '@support/front-create-app'
import Util from '@support/front-util'
const app = createApp()
app
    // 声明任务
    .task('工具库', Util, { domain: 'custom domain', affix: 'custom affix' })
    // 注入所有任务
    .use(app.getAllTask())
    .start()
// 获取实例
Vue.$ctx.util
```

## 单独使用
```js
import Util from '@support/front-util'
// 获取实例
const util = new Util({ domain: 'custom domain', affix: 'custom affix' })
```

## 配置
### domain
- 类型 `string`
- 默认值 `location.hostname`
- 用法
    ```js
    new Util({ domain: 'test.com' })
    ```
    设置`cookie`存取域名

### affix
- 类型 `string`
- 用法
    ```js
    new Util({ affix: '-dev' })
    ```
    设置`coookie、sessionStorage、localStorage`存取键值后缀，区分多环境下键值冲突


## 实例API
### bignumber
- 类型 `function`
- 用法
    ```js
    const { BigNumber } = util
    let x = new BigNumber(123.4567);
    let y = BigNumber('123456.7e-3');
    let z = new BigNumber(x);
    x.isEqualTo(y) && y.isEqualTo(z) && x.isEqualTo(z);      // true
    ```
    具体用法参考[bignumber.js](https://github.com/MikeMcl/bignumber.js)

### convertImgToBase64
- 类型 `function`
- 参数 
    - `{string} url`
- 返回值 `string`
- 用法
    ```js
    const { convertImgToBase64 } = util
    convertImgToBase64("image url")
    ```
    图片转base64

### cookie
- 类型 `object`
- 用法
    ```js
    const { cookie } = util
    // 写入cookie
    cookie.set('accesstoken', 'mbx8yfhu0izpjy67f511708jymtnm19h')
    // 读取cookie
    cookie.get('accesstoken') //mbx8yfhu0izpjy67f511708jymtnm19h
    // 删除cookie
    cookie.remove('accesstoken')
    ```
    cookie存取

### copy
- 类型 `function`
- 参数 
    - `{string} text`
- 用法
    ```js
    const { copy } = util
    copy("我是要复制的文本")
    ```
    复制文本

### dateDiff
- 类型 `function`
- 参数 
    - `{string|number|date} date`
- 返回值 `string`
- 用法
    ```js
    const { dateDiff } = util
    dateDiff(new Date()) // 刚刚
    dateDiff((new Date()).getTime() - 1000 * 60 * 11) // 11分钟前
    dateDiff((new Date()).getTime() - 1000 * 60 * 61) // 1小时前
    // 具体效果请查看源码
    ```
    计算时差（比较当前时间）


### daterangeParseString
- 类型 `function`
- 参数 
    - `{array} dates`
- 用法
    ```js
    const { daterangeParseString } = util
    const begin = new Date(3,3,3)
    const end = new Date(4,4,4)
    daterangeParseString([begin, end]) // 'btw|1903-04-03,1904-05-04'
    ```
    拼接日期

### downloadFile
- 类型 `function`
- 参数 
    - `{string} url`
- 用法
    ```js
    const { downloadFile } = util
    downloadFile("downloadFile url")
    ```
    下载文件

### escapeData
- 类型 `function`
- 参数 
    - `{string} val`
- 返回值 `string`
- 用法
    ```js
    const { escapeData } = util
    escapeData("<a>链接</a>") // &lt;a&gt;链接&lt;/a&gt;
    ```
    转义字符串
    
### formatDate
- 类型 `function`
- 参数 
    - `{string|number|date} val`
    - `{string} [format]` 默认'YYYY-MM-DD'
- 返回值 `string`
- 用法
    ```js
    const { formatDate } = util
    formatDate(new Date(3,3,3)) // 19030403
    ```
    格式化日期
    
### formatFileSize
- 类型 `function`
- 参数 
    - `{number} val`
    - `{number} [decimalPlaces]` 默认2
- 返回值 `string`
- 用法
    ```js
    const { formatFileSize } = util
    formatFileSize(11234) // 10.97KB
    ```
    格式化文件大小

### getAgeByBirthday
- 类型 `function`
- 参数 
    - `{number|date} date`
- 返回值 `number`
- 用法
    ```js
    const { getAgeByBirthday } = util
    getAgeByBirthday(new Date(3,3,3))
    ```
    计算年龄（比较当前时间）

### getByteLen
- 类型 `function`
- 参数 
    - `{string} str`
- 返回值 `string`
- 用法
    ```js
    const { getByteLen } = util
    getByteLen('44圈圈44') // {len: 8, target_len: 0, target_idx: 0}
    ```
    计算字符串字节长度，全角算2字符，半角1字符

### getConstellation
- 类型 `function`
- 参数 
    - `{number|date} date`
- 返回值 `string`
- 用法
    ```js
    const { getConstellation } = util
    getConstellation(new Date(3,3,3)) // 白羊座
    ```
    计算星座

### getZodiac
- 类型 `function`
- 参数 
    - `{number|date} date`
- 返回值 `string`
- 用法
    ```js
    const { getZodiac } = util
    getZodiac(new Date(3,3,3)) // 兔
    ```
    计算生肖

### localStorage
- 类型 `object`
- 用法
    ```js
    const { localStorage } = util
    // 写入localStorage
    localStorage.set('accesstoken', 'mbx8yfhu0izpjy67f511708jymtnm19h')
    // 读取localStorage
    localStorage.get('accesstoken') //mbx8yfhu0izpjy67f511708jymtnm19h
    // 删除localStorage
    localStorage.remove('accesstoken')

    const handle = ()=>{ console.log('accesstoken的值被修改了') }
    // 添加当前窗口对key事件的监听
    const removeEvent = localStorage.addEvent('accesstoken', handle)
    // 移除监听
    localStorage.removeEvent('accesstoken', handle) // 或者执行 removeEvent()
    // 触发key事件（写入一个随机值）
    localStorage.handle('accesstoken')
    ```
    localStorage存取

### lodash
- 类型 `function`
- 用法
    ```js
    const { lodash } = util
    lodash.uniqueId('contact_') // 'contact_104'
    ```
    具体用法参考[lodash](https://www.lodashjs.com/)

### md5
- 类型 `function`
- 参数 
    - `{string} str`
    - `{string} [key]`
    - `{boolean} [raw]`
- 用法
    ```js
    const { md5 } = util
    md5("value") // "2063c1608d6e0baf80249c42e2be5804"
    ```
    计算md5值，基于[JavaScript-MD5](https://github.com/blueimp/JavaScript-MD5)

### moment
- 类型 `function`
- 用法
    ```js
    const { moment } = util
    moment('2010-10-20').isBefore('2010-10-21') // true
    ```
    具体用法参考[momentjs](http://momentjs.cn/)

### numToChinese
- 类型 `function`
- 参数 
    - `{string|number} number`
- 用法
    ```js
    const { numToChinese } = util
    numToChinese('123') // 一百二十三
    ```
    阿拉伯数字转换中文，仅支持万亿以下，不支持小数

### numToThousands
- 类型 `function`
- 参数 
    - `{string|number} number`
    - `{string|number} length`
- 用法
    ```js
    const { numToThousands } = util
    numToThousands('123', 5) // 123.00000
    ```
    数字转换为千分位

### openWindow
- 类型 `function`
- 参数 
    - `{string} url`
- 用法
    ```js
    const { openWindow } = util
    openWindow("https://baidu.com")
    ```
    打开新窗口

### qs
- 类型 `object`
- 用法
    ```js
    const { qs } = util
    qs.stringify({ a:1, b:2 }) // "a=1&b=2"
    qs.parse('a=1&b=2') // { a:1, b:2 }
    ```
    参数解析格式化，具体用法参考[qs](https://github.com/ljharb/qs)
    

### sessionStorage
- 类型 `object`
- 用法
    ```js
    const { sessionStorage } = util
    // 写入sessionStorage
    sessionStorage.set('accesstoken', 'mbx8yfhu0izpjy67f511708jymtnm19h')
    // 读取sessionStorage
    sessionStorage.get('accesstoken') //mbx8yfhu0izpjy67f511708jymtnm19h
    // 删除sessionStorage
    sessionStorage.remove('accesstoken')
    ```
    sessionStorage存取

### userAgent
- 类型 `object`
- 用法
    ```js
    const { userAgent } = util
    userAgent
    // 输出
    {
        trident,// IE内核
        weChat,// 微信打开
        presto,// opera内核
        webKit,// 苹果、谷歌内核
        mobile,// 是否为移动终端
        ios,// ios终端
        android,// android终端或uc浏览器
        iPhone,// 是否为iPhone或者QQHD浏览器
        iPad,// 是否iPad
        webApp,// 是否web，没有头部与底部
        isWebkit,// webkit
        isIE,// ie
        isFirefox,// firefox
        isClient// 是否为electron客户端
    }
    ```
    判断浏览器内核
