<template>
    <com-layout :loading="loading">
        <div id="app-container"></div>
    </com-layout>
</template>

<script>
import { start, runAfterFirstMounted, initGlobalState } from 'qiankun';

export default {
    name: 'App',
    data() {
        return {
            loading: false,
        };
    },
    created() {
        if (!window.qiankunStarted) {
            window.qiankunStarted = true;
            // 加载
            this.loading = true;
            const permission = this.$ctx.store.getters['user/permission'];
            const { onGlobalStateChange } = initGlobalState({
                permission,
                main: '',
                navs: [],
            });
            onGlobalStateChange(({ main, navs }) => {
                this.$store.dispatch('layout/view/toggle', main);
                this.$store.dispatch('menu/setNavs', navs);
            });
            start({
                prefetch: true,
            });
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
