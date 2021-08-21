> 基于el-radio拓展的智能RadioSmart选择器

<script>
import BaseUse from './base.md'
import AjaxUse from './ajax.md'


export default {
    components: {
       BaseUse,
       AjaxUse
    }
}
</script>

<base-use></base-use>
<ajax-use></ajax-use>

## Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| size     | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效   | string  | medium / small / mini |    —     |
| disabled  | 是否禁用    | boolean   | — | false   |
| text-color  | 按钮形式的 Radio 激活时的文本颜色    | string   | — | #ffffff   |
| fill  | 按钮形式的 Radio 激活时的填充色和边框色    | string   | — | #409EFF   |
| `-分割线-` | `---` | `---` | `---` | `---`
| type  | 类型 | string | button | '' |
| list  | 选项集合，优先级比ajax高 | array | [List](/ui/radio-smart#list) | [] |
| autoFetch | 当ajax变化时请求获取列表，挂载时获取列表 | boolean | — | true |
| ajax | 获取选项集合的请求参数，get 请求 | object | — | { url: '', params: {} }   |
| listKey | 接口请求选项读取响应的键 | string | — | - |
| interceptors | 获取列表时的拦截器，then为获取列表成功时拦截，catch为获取列表失败时拦截 | object | — | { then: res => res, catch: err => err } |


## List
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | Radio 的 value   | string / number / boolean    |       —        |      —   |
| disabled  | 是否禁用    | boolean   | — | false   |
| border  | 是否显示边框  | boolean   | — | false   |
| size  | Radio 的尺寸，仅在 border 为真时有效  | string  | medium / small / mini | — |
| name | 原生 name 属性 | string    |      —         |     —    |
## Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |