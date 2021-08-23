<basic></basic>

## TableTool Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| events | 按钮列表 | [Event](#event)[] | - | [{ title: '刷新', icon: 'refresh', event: this.$emit('refresh') }] |

## TableTool Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| refresh | 刷新按钮点击回调事件 | - |

## Event

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
