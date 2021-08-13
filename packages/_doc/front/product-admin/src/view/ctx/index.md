
:::tip
`Vue.$ctx`挂载全局的配置、实例、方法，方便使用
* 模版中使用：`<div>{{ '{'+'{'+ '$ctx.env' +'}'+'}' }}</div>`
* 脚本中使用：`const { env } = Vue.$ctx`
:::

## 环境变量
### env
- 类型 `string`
- 枚举 
    - `'dev-server'` 本地开发环境
    - `'dev'` 产品验收环境
    - `'test'` 测试验收环境
    - `'pd'` 正式环境
- 用法:  
    ```js
    const { env } = Vue.$ctx
    if(env === 'dev'){
        console.log('我在产品验收环境')
    }
    ```
    验收环境

### envVal
- 类型 `number`
- 枚举 
    - `0` 本地开发环境
    - `10` 产品验收环境
    - `100` 测试验收环境
    - `10000` 正式环境
- 用法:  
    ```js
    const { envVal } = Vue.$ctx
    if(envVal <= 10){
        console.log('我在本地开发环境、产品验收环境')
    }
    ```
    验收环境，`number`类型，方便多环境的判断

### namespace
- 类型 `string`
- 用法:  
    ```js
    const { namespace } = Vue.$ctx
    if(namespace === 'desk'){
        console.log('我在工作台页面中')
    }
    ```
    命名空间

### base
- 类型 `string`
- 用法:  
    ```js
    const { base } = Vue.$ctx
    if(base === '/desk/'){
        console.log('我在工作台页面中')
    }
    ```
    路由根目录

### version
- 类型 `string`
- 用法:  
    ```js
    const { version } = Vue.$ctx
    ```
    版本号

## 常用工具
### lodash
- 用法:  
    ```js
    const { util: { lodash } } = Vue.$ctx
    ```
    具体用法参考[lodash](https://www.lodashjs.com/)

### moment
- 用法:  
    ```js
    const { util: { moment } } = Vue.$ctx
    ```
    具体用法参考[momentjs](http://momentjs.cn/)

### BigNumber
- 用法:  
    ```js
    const { util: { BigNumber } } = Vue.$ctx
    ```
    具体用法参考[bignumber.js](https://github.com/MikeMcl/bignumber.js)

### 更多用法
基于[@support/front-util](/ecosystem-ui/core/util)，更多用法查看[实例API](/ecosystem-ui/core/util#shi-li-api)

## 校验器
配合[自定义表单验证规则](/ecosystem-ui/dmui/form#zi-ding-yi-biao-dan-yan-zheng-gui-ze)，快速校验表单
### checkFormat
- 类型 `function`
- 参数 
    - `{string} type` 校验类型
        - `idcard` 身份证(匹配效验码方式)
        - `idcard_regex` 身份证(通过正则表达式)
        - `email` 邮箱
        - `mobile` 手机号
        - `zipcode` 邮编
        - `bankno` 银行卡号(基于Luhn算法)
        - `bankno_regex` 银行卡号(通过正则表达式)
        - `passport` 护照
        - `qq` QQ号码
        - `date` 日期
        - `age` 年龄，范围[0-100]
        - `positive_int` 正整数
        - `positive_num` 正数(包含小数)
        - `int` 整数(包含负数)
        - `decimal` 小数(包含整数以及小数)
        - `name` 姓名
        - `corp_name` 企业名称
        - `url` url
    - `{string} [required]` 是否必填，默认true
- 返回值 `{function} validator`
- 用法:  
    ```js
    const { checkFormat } = Vue.$ctx.validator

    // 校验手机号
    {
        validator: checkFormat('mobile')
    }
    ```
    校验格式

### getBirthByIdcard
- 类型 `function`
- 参数
    - `{string} val`
- 返回值 `{date}`
- 用法:  
    ```js
    const { getBirthByIdcard } = Vue.$ctx.validator
    getBirthByIdcard('235407195106112745') // Mon Jun 11 1951 00:00:00 GMT+0800 (中国标准时间)
    ```
    通过身份证获取生日

### getAgeByIdcard
- 类型 `function`
- 参数
    - `{string} val`
- 返回值 `{number}`
- 用法:  
    ```js
    const { getAgeByIdcard } = Vue.$ctx.validator
    getAgeByIdcard('411323890901146') // 27
    ```
    通过身份证获取年龄

### getGenderByIdcard
- 类型 `function`
- 参数
    - `{string} val`
- 返回值 `{number}` 男1，女2
- 用法:  
    ```js
    const { getGenderByIdcard } = Vue.$ctx.validator
    getAgeByIdcard('411323890901146') // 2
    ```
    通过身份证获取性别

## 过滤器
### area
- 类型 `function`
- 参数
    - `{string|array|number} val`
    - `{boolean} [single]` 是否返回单个匹配结果，在`string|number`类型时有效，默认false
- 用法:  
    ```html
    //显示id为3001655的省市区
    {{ 3001655 | area }}
    // 河南

    //显示id为3001656的省市区
    {{ 3001656 | area }}
    // 河南/郑州

    //显示id为3001658的省市区
    {{ 3001658 | area }}
    // 河南/郑州/中原区

    //显示id为3001658的地区
    {{ 3001658 | area(true) }}
    // 中原区

    //显示id集合为['3001658']的省市区
    {{ ['3001658'] | area }}
    // 中原区
    ```
    根据id获取省市区结构
    
### defaultAvatar
- 类型 `function`
- 参数
    - `{string} val`
- 用法:  
    ```html
    <img :src="imgUrl | defaultAvatar"/>
    ```
    默认头像

### numToChinese
- 类型 `function`
- 参数
    - `{string|number} number`
- 用法:  
    ```html
    <div>{{ 2159 | numToChinese }}</div>
    <!-- 输出 -->
    <div>二千一百五十九</div>
    ```
    阿拉伯数字转汉字，[详细用法](/ecosystem-ui/core/util#numtochinese)

### numToThousands
- 类型 `function`
- 参数
    - `{string|number} number`
    - `{string|number} length`
- 用法:  
    ```html
    <div>{{ 123 | numToThousands(5) }}</div>
    <!-- 输出 -->
    <div>123.00000</div>
    ```
    金额转换为千分位格式，[详细用法](/ecosystem-ui/core/util#numToThousands)

### zero2mask
- 类型 `function`
- 参数
    - `{string|number} val`
    - `{string} [mask]` 默认'--'
- 用法:  
    ```html
    <div>{{ 0 | zero2mask }}</div>
    <!-- 输出 -->
    <div>--</div>
    ```
    数字0转换为mask
    
### round
- 类型 `function`
- 参数
    - `{string|number} val`
    - `{string} [n]` 默认2
- 用法:  
    ```html
    <div>{{ 2.335 | round }}</div>
    <!-- 输出 -->
    <div>2.34</div>
    ```
    四舍五入，[详细用法](https://www.lodashjs.com/docs/4.17.5.html#round)
    
### percent
- 类型 `function`
- 参数
    - `{string|number} val`
    - `{string} [n]` 默认2
- 用法:  
    ```html
    <div>{{ 0.1 | percent }}</div>
    <!-- 输出 -->
    <div>10.00%</div>
    ```
    百分比
    
### date
- 类型 `function`
- 参数
    - `{string|number|date} val`
    - `{string} [format]` 默认'YYYY-MM-DD'
- 用法:  
    ```html
    <div>{{ '1999' | date }}</div>
    <!-- 输出 -->
    <div>1999-01-01</div>
    ```
    格式化日期，[详细用法](/ecosystem-ui/core/util#formatdate)
    
### dateDiff
- 类型 `function`
- 参数
    - `{string|number|date} val`
- 用法:  
    ```html
    <div>{{ new Date() | dateDiff }}</div>
    <!-- 输出 -->
    <div>刚刚</div>
    ```
    格式化时间差，[详细用法](/ecosystem-ui/core/util#dateDiff)
    
### mobileMask
- 类型 `function`
- 参数
    - `{string|number} val`
- 用法:  
    ```html
    <div>{{ 13043437372 | mobileMask }}</div>
    <!-- 输出 -->
    <div>130****7372</div>
    ```
    手机号掩码
    
### lastTwoChars
- 类型 `function`
- 参数
    - `{string} val`
- 用法:  
    ```html
    <div>{{ 'abcd' | lastTwoChars }}</div>
    <!-- 输出 -->
    <div>cd</div>
    ```
    取字符串最后2个字符

## 状态管理
### vuex
- 类型 `object`
- 用法:  
    ```js
    const { 
        vuex: {
            mapState,
            mapGetters,
            mapActions,
            mapMutations,
            createNamespacedHelpers,
        }
    } = Vue.$ctx
    ```
    原生vuex，方便快速引用

### store
- 类型 `object`
- 用法:  
    ```js
    const { store } = Vue.$ctx
    ```
    状态机实例，[查看状态树](/ecosystem-ui/product-major/store)，[更多用法](https://vuex.vuejs.org/zh/api/#vuex-store-%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7)

## 路由处理
### router
- 类型 `object`
- 用法:  
    ```js
    const { router } = Vue.$ctx
    ```
    路由实例 [实例属性](https://router.vuejs.org/zh/api/#router-%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7)、[实例方法](https://router.vuejs.org/zh/api/#router-%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95)

### hyperlink
- 类型 `object`
- 用法:  
    ```js
    const { hyperlink } = Vue.$ctx
    ```
    内部链接处理
- open
    - 参数
        - `{string} path`
        - `{string|object} option`
            - `{string} origin`
            - `{object} query`
            - `{string} target`
    - 用法
    ```js
    // 当前窗口打开 https://baidu.com
    hyperlink.open('https://baidu.com')
    // 新窗口打开 http://baidu.com
    hyperlink.open('https://baidu.com', '_blank') 
    // 当前窗口打开 https://test.com/approval
    hyperlink.open('/approval') 
    // 当前窗口打开 https://i.test.com/approval
    hyperlink.open('/approval', { origin: 'https://i.test.com' }) 
    // 新窗口打开 https://i.test.com/approval
    hyperlink.open('/approval', { origin: 'https://i.test.com', target: '_blank' }) 
    // 当前窗口打开 https://i.test.com/approval?a=1
    hyperlink.open('/approval', { origin: 'https://i.test.com', query: { a:1 } })
    ```
    打开内部链接
- resolve
    - 参数
        - `{string} url`
    - 用法
    ```js
    hyperlink.resolve('ehr://workbench')
    ```
    解析内部链接为路由，无法解析时会返回当前链接

## 鉴权、请求
### auth
- 类型 `object`
- 用法:  
    ```js
    const { auth } = Vue.$ctx
    ```
    鉴权
- token
    - 类型 `string`
    - 用法
    ```js
    auth.token
    ```
    获取token
- setToken
    - 类型 `function`
    - 参数
        - `{object} option`
            - `{string} token`
            - `{boolean} status` 默认0,
            - `{string} account` 默认'
    - 用法
    ```js
    auth.setToken()
    ```
    保存登录凭证
- signout
    - 类型 `function`
    - 用法
    ```js
    auth.signout()
    ```
    退出登录

### api
- 类型 `object`
- 用法:  
    ```js
    const { api } = Vue.$ctx
    ```
    http请求，[基本用法](/ecosystem-ui/core/api#shi-li-api)
- config.errToast
    - 用法
    ```js
    api.get('/user/info', { errToast: false }) // 接口异常下不再自动提示消息
    ```
    异常提示控制，默认开启

## 其他
### skin
- 类型 `object`
- 用法:  
    ```js
    const { skin } = Vue.$ctx
    ```
    皮肤
- currentColors.primary
    - 类型 `string`
    - 用法
    ```js
    skin.currentColors.primary
    ```
    获取当前皮肤主色值
- colorName
    - 类型 `string`
    - 用法
    ```js
    skin.colorName
    ```
    获取当前皮肤名称
- colorList
    - 类型 `array`
    - 用法
    ```js
    skin.colorList
    ```
    获取可用皮肤列表
- use
    - 类型 `function`
    - 参数
        - `{string} colorName`
            - `green`
            - `blue`
            - `purple`
            - `pink`
    - 用法
    ```js
    skin.use('green') // 应用绿色皮肤
    ```
    使用皮肤
