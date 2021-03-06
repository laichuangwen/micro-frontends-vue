<basic></basic>

## TableSmart Attributes 
table-smart是table-plus的拓展更多配置参考[table-plus attributes](/ui/table-plus#tableplus-attributes)

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| ajax | 获取选项集合的请求参数，get 请求 | object | — | { url: '', params: {} }   |
| keys | 获取列表相关参数的键 | Object | - | { list: 'objects', total: 'total_count', pageCurrent: 'pageCurrent', pageSize: 'pageSize' } |
| headerCustomHide | 隐藏自定义表头 | Boolean | - | true |
| fullscreenHide | 隐藏全屏 | Boolean | - | false |
| tools | 右边工具[table-tool/Event](/ui/table-tool#event) | Array | - | [] |


## TableSmart Events
table-smart是table-plus的拓展更多配置参考同[table-plus events](/ui/table-plus#tableplus-events)

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| search-finish | 列表请求完成回调 | Function |

## TableSmart column

- table-smart是table-plus的拓展更多配置参考同[table-plus column](/ui/table-plus#tableplus-column)
- table-smart也是table-custom的拓展更多配置参考同[table-custom column](/ui/table-custom#column)

### TableSmart Methods
table-smart是table-plus的拓展更多配置参考同[table-plus methods](/ui/table-plus#tableplus-methods)

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| refresh | 从当前页刷新列表 | - |
| search | 从第一页刷新列表 | - |

## TableSmart Scoped Slot

| name | 说明 |
| --- | --- |
| topbarLeft | topbar 左边 |

<script>
import basic from './basic.md'

export default {
    components: {
        basic,
    }
}
</script>
