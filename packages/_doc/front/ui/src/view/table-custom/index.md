<basic></basic>

## TableCustom Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| columns | 表格所有列 | [Column](#column) | - | [] |
| min | 最小保留列数量 | number | - | 3 |
| max | 最大保留列数量 | number | - | 50 |
| offsetTop | 顶部间距 | number | - | 0 |

## TableCustom Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| save | 点击保存的回调事件 | 选中的列 |

## TableCustom Methods

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| open | 打开弹框 | 选中的列 |

## Column

> 基于[表头配置](/ecosystem-ui/dmui/table#tablecolumn-props)的基础上做了属性拓展，拓展如下

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| required | 是否必选 | boolean | - | false |

<script>
import basic from './basic.md'

export default {
    components: {
        basic
    }
}
</script>
