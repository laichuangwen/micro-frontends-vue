
> 通过[husky](https://github.com/typicode/husky)拦截git-hooks、
再配合[eslint](https://github.com/eslint/eslint)、[stylelint](https://github.com/stylelint/stylelint)实现自动检测&格式化

## Git
* 邮箱名必须`@cucosmart.com`结尾
* 提交文档信息必须符合格式`doc 描述`，例如`doc 完善组件的使用文档说明`
* 文档doc不能和任务和bug一起提交commit
* commit时出现eslint错误一定要修复错误后才提交
* 功能分支名推荐`你的名字拼音缩写-功能`，例如`xiaoming-webpack-upgrade`

## Style
* 伪类元素必须`::`
* 不能出现重复属性
* [查看更多规则](http://gitea.gosund.com:3000/Ewen/cuco/src/branch/dev/.stylelintrc)，欢迎补充


## Script
* 不能使用`var`，用`let const`代替
* 不能`==`，用`===`代替
* 不能存在未使用的变量
* [查看更多规则](http://gitea.gosund.com:3000/Ewen/cuco/src/branch/dev/.eslintrc)，欢迎补充

## Vue
* `<style>`标签必须包含`lang`属性
:::tip
任何`.vue`文件的`<style> <script>`标签块内容都将视做样式和脚本，开启检测
:::

## 路由
* `route` 路径path定义要和文件夹对应，方便查找
* 动态路由参数只能放在后面，不建议放在中间 错误例子：`company/12/details` 正确例子:`company/details/12`或 `company/details?id=12`
  
## 组件
* 组件名称命名首字母大写驼峰 例子: `TopBar.vue`
* 超过3个组件要用components文件夹装起来