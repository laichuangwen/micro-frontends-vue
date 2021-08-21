> 基于el-checkbox拓展的智能CheckboxSmart多选框组

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
| value / v-model | 绑定值 | array | — | — |
| size     | 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效   | string  | medium / small / mini  |    —     |
| disabled  | 是否禁用    | boolean   | — | false   |
| min     | 可被勾选的 checkbox 的最小数量   | number    |       —        |     —    |
| max     | 可被勾选的 checkbox 的最大数量   | number    |       —        |     —    |
| text-color  | 按钮形式的 Checkbox 激活时的文本颜色    | string   | — | #ffffff   |
| fill  | 按钮形式的 Checkbox 激活时的填充色和边框色    | string   | — | #409EFF   |
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
| value / v-model | 绑定值 | string / number / boolean | — | — |
| label     | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）| string / number / boolean  |       —        |     —    |
| true-label | 选中时的值   | string / number | — |     —    |
| false-label | 没有选中时的值   | string / number    |      —         |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| border  | 是否显示边框 (`type="button"无效`) | boolean   | — | false   |
| size  | Checkbox 的尺寸，仅在 border 为真时有效  | string  | medium / small / mini | — |
| name | 原生 name 属性 | string    |      —         |     —    |
| checked  | 当前是否勾选    | boolean   |  — | false   |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制    | boolean   |  — | false   |
## Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |