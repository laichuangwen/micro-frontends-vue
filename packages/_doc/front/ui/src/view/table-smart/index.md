<basic></basic>

## TableSmart Attributes 
table-smart是table-plus的拓展更多配置参考[table-plus](/ui/table-plus#tableplus-attributes)

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| ajax | 获取选项集合的请求参数，get 请求 | object | — | { url: '', params: {} }   |
| keys | 获取列表相关参数的键 | Object | - | { list: 'objects', total: 'total_count', pageCurrent: 'pageCurrent', pageSize: 'pageSize' } |
| headerCustomHide | 隐藏自定义表头 | Boolean | - | true |
| fullscreenHide | 隐藏全屏 | Boolean | - | false |
| tools | 右边工具[table-tool/Event](/ui/table-tool#event) | Array | - | [] |
| 额外参数 | [table-tool/Event](/ui/table-tool#event) | Array | - | [] |


## TableSmart Events
table-smart是table-plus的拓展更多配置参考同[table events](/ui/table-plus#tableplus-events)

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| search-finish | 列表请求完成回调 | Function |

## TableSmart column

table-smart是table-plus的拓展更多配置参考同[table-plus column](/ui/table-plus#tableplus-column)
table-smart是table-custom的拓展更多配置参考同[table-custom](/ui/table-custom#column)

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 按钮名称 | string | - | - |
| icon | 图标 | string / file | - | - |
| event | 点击回调事件 | function | - | - |
| type | 按钮类型 | string | 'dropdown' | - |
| options | dropdown下拉选项 | [options](#options)[] | - | [] |
| activeRule | dropdown类型的高亮规则 | function | - | - |

## options
| 参数 | 说明 |  类型 | 可选值 | 默认值 |
| --- | --- |--- | --- |--- |
| value | 选项的值	 | string/number | - | - |
| label | 选项的标签 | string/number | - | - |

<script>
import basic from './basic.md'

export default {
    components: {
        basic,
    }
}
</script>
