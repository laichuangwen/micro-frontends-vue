<script>
import Commonly from './commonly.md'
import Rotate from './rotate.md'
import Hover from './hover.md'
import How from './how.md'


export default {
    components: {
        Commonly,
        Rotate,
        Hover,
        How
    }
}
</script>

> 基于svg提供了一套常用的图标集合


<How></How>
<Rotate></Rotate>
<Hover></Hover>
<Commonly></Commonly>



## Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| color  | 颜色 | string | — | — |
| type | 类型 | string | — | — |
| rotate | 是否旋转 | boolean | — | false   |
| rotate-duration | 旋转周期 | number | — | 1 |
| pointer | 是否悬停手势 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |