> 基于el-select智能select选择器

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

## 组件是基于el-select进行拓展

## Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| type  | 类型 | string | ['group'] | '' |
| autoFetch | 当ajax变化时请求获取列表，挂载时获取列表 | boolean | — | true |
| ajax | 获取选项集合的请求参数，get 请求 | object | — | { url: '', params: {} }   |
| listKey | 接口请求选项读取响应的键 | string | — | - |
| interceptors | 获取列表时的拦截器，then为获取列表成功时拦截，catch为获取列表失败时拦截 | object | — | { then: res => res, catch: err => err } |
| 更多 | 参考[Select Attributes](https://element.eleme.cn/#/zh-CN/component/select#select-attributes) | — | — | — |

## Events
- 参考[Select Events](https://element.eleme.cn/#/zh-CN/component/select#select-events) 
##  Slots
- 参考[Select Slots](https://element.eleme.cn/#/zh-CN/component/select#select-slots) 
## Methods
- 参考[Select Methods](https://element.eleme.cn/#/zh-CN/component/select#methods) 