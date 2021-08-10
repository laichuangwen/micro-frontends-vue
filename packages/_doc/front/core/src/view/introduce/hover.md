
## 鼠标悬停
:::demo
```html
<template>
    <div :class="s.app">
        禁用：<d-icon type="alert" disabled></d-icon>
        手势：<d-icon type="move" pointer></d-icon>
    </div>
</template>
<script>
export default {}
</script>
<style module="s" lang="scss">
.app{
    svg{
        margin: 0 10px;
    }
}
</style>
```
:::
