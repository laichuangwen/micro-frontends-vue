<template>
    <div id="app-container"></div>
</template>

<script>
import { start, runAfterFirstMounted, setDefaultMountApp } from 'qiankun';

export default {
    name: 'App',
    data() {
        return {
        };
    },
    created() {
        if (!window.qiankunStarted) {
            window.qiankunStarted = true;
            // 加载
            start({
                prefetch: true,
            });
            setDefaultMountApp('/guide');
            // 加入加载
            runAfterFirstMounted(() => {
                console.log('第一个微应用加载完成');
                this.loading = false;
            });
        }
    },
};
</script>

<style lang="scss" module="s">
</style>
