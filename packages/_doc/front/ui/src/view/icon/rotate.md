
## 旋转
:::demo `rotate`开启旋转，`rotate-duration`指定旋转周期
```html
<template>
    <div :class="s.app">
        <d-icon type="settings" rotate></d-icon>
        <d-icon type="loading" rotate></d-icon>
        <d-icon type="settings" rotate :rotate-duration=".3"></d-icon>
        <d-icon type="loading" rotate :rotate-duration=".3"></d-icon>
    </div>
</template>
<style module="s" lang="scss">
.app{
    svg{
        margin: 0 10px;
    }
}
</style>
```
:::