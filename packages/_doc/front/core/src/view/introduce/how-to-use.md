## 使用方法
:::demo 直接使用`type`属性来指定图标
```html
<template>
    <div :class="s.app">
        <!-- <d-icon type="arrow-back"></d-icon>
        <d-icon type="arrow-down"></d-icon> -->
        <!-- 自定义图标 -->
        <d-icon :type="require('./bug.icon')"></d-icon>
        <d-icon :type="require('./build.icon')"></d-icon>
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

