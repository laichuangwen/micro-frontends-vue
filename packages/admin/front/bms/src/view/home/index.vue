<template>
    <div :class="s.view">
        home333333333444正式
        <el-button type="primary"
            @click="jump">跳转</el-button>
        <el-button type="primary"
            @click="store">设置主应用store</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        jump() {
            // hyperlink.open('/vue')
            history.pushState(null, '/rbac', '/rbac');
        },
        store() {
            this.$ctx._mainApp.setGlobalState({
                main: 'denied',
            });
        },
    },
};
</script>

<style lang="scss" module="s">
.view {
    height: 1500px;
}
</style>
